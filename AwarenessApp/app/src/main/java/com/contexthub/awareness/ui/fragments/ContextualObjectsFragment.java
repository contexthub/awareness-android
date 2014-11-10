package com.contexthub.awareness.ui.fragments;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.EditText;

import com.chaione.contexthub.sdk.SensorPipeline;
import com.chaione.contexthub.sdk.SensorPipelineEvent;
import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.BeaconsActivity;
import com.contexthub.awareness.ui.GeofencesActivity;
import com.contexthub.awareness.ui.PushActivity;
import com.contexthub.awareness.ui.VaultActivity;
import com.contexthub.awareness.ui.widget.Item;
import com.contexthub.awareness.ui.widget.ItemsAdapter;
import com.contexthub.awareness.ui.widget.SimpleSectionedRecyclerViewAdapter;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import butterknife.ButterKnife;
import butterknife.InjectView;

/**
 * Created by andy on 11/5/14.
 */
public class ContextualObjectsFragment extends Fragment {

    @InjectView(android.R.id.list) RecyclerView list;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRetainInstance(true);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_contextual_objects, container, false);
        ButterKnife.inject(this, view);
        return view;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        list.setLayoutManager(new LinearLayoutManager(getActivity()));

        List<SimpleSectionedRecyclerViewAdapter.Section> sections = buildSections();
        SimpleSectionedRecyclerViewAdapter sectionedAdapter = new SimpleSectionedRecyclerViewAdapter(
                getActivity(), R.layout.section, R.id.section_text, new ItemsAdapter(getActivity(), items));
        sectionedAdapter.setSections(sections.toArray(new SimpleSectionedRecyclerViewAdapter.Section[sections.size()]));

        list.setAdapter(sectionedAdapter);
    }

    private List<SimpleSectionedRecyclerViewAdapter.Section> buildSections() {
        List<SimpleSectionedRecyclerViewAdapter.Section> sections =
                new ArrayList<SimpleSectionedRecyclerViewAdapter.Section>();
        sections.add(new SimpleSectionedRecyclerViewAdapter.Section(0, getString(R.string.basic)));
        sections.add(new SimpleSectionedRecyclerViewAdapter.Section(2, getString(R.string.elements)));
        sections.add(new SimpleSectionedRecyclerViewAdapter.Section(4, getString(R.string.services)));
        sections.add(new SimpleSectionedRecyclerViewAdapter.Section(6, getString(R.string.other)));
        return sections;
    }

    private Item[] items = new Item[]{
            new Item(R.string.event, R.string.trigger_events, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    confirmTriggerCustomEvent();
                }
            }),
            new Item(R.string.console, R.string.log_messages, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    showMessageDialog();
                }
            }),
            new Item(R.string.beacon, R.string.beacon_crud, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(getActivity(), BeaconsActivity.class));
                }
            }),
            new Item(R.string.geofence, R.string.geofence_crud, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(getActivity(), GeofencesActivity.class));
                }
            }),
            new Item(R.string.push, R.string.send_push, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(getActivity(), PushActivity.class));
                }
            }),
            new Item(R.string.vault, R.string.vault_crud, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(getActivity(), VaultActivity.class));
                }
            }),
            new Item(R.string.http, R.string.fire_webhooks, new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    showWebhookDialog();
                }
            })
    };

    private void confirmTriggerCustomEvent() {
        AlertDialog dialog = new AlertDialog.Builder(getActivity())
                .setTitle(R.string.contexthub)
                .setMessage(R.string.trigger_custom_event_prompt)
                .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        try {
                            SensorPipeline.getInstance().triggerEvent(new SensorPipelineEvent("custom_event", new JSONObject()));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        dialog.dismiss();
                    }
                })
                .setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                })
                .create();
        dialog.show();
    }

    private void showMessageDialog() {
        View view = LayoutInflater.from(getActivity()).inflate(R.layout.input_dialog, null, false);
        final EditText editText = (EditText) view.findViewById(android.R.id.text1);

        AlertDialog dialog = new AlertDialog.Builder(getActivity())
                .setTitle(R.string.contexthub)
                .setMessage(R.string.enter_message)
                .setView(view)
                .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        try {
                            JSONObject data = new JSONObject();
                            data.put("message", editText.getText().toString());
                            SensorPipeline.getInstance().triggerEvent(new SensorPipelineEvent("console_event", data));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        dialog.dismiss();
                    }
                })
                .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                })
                .create();
         dialog.show();
    }

    private void showWebhookDialog() {
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_list_item_1,
                android.R.id.text1, getResources().getStringArray(R.array.http_methods));
        AlertDialog dialog = new AlertDialog.Builder(getActivity())
                .setTitle(R.string.trigger_event_prompt)
                .setAdapter(adapter, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        try {
                            JSONObject data = new JSONObject();
                            data.put("event_type", which);
                            SensorPipeline.getInstance().triggerEvent(new SensorPipelineEvent("http_event", data));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        dialog.dismiss();
                    }
                })
                .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                })
                .create();
        dialog.show();
    }
}
