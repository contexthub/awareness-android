package com.contexthub.awareness.ui;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.MenuItem;
import android.view.View;

import com.chaione.contexthub.sdk.SensorPipeline;
import com.chaione.contexthub.sdk.SensorPipelineEvent;
import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.widget.DividerItemDecoration;
import com.contexthub.awareness.ui.widget.Item;
import com.contexthub.awareness.ui.widget.ItemsAdapter;

import org.json.JSONException;
import org.json.JSONObject;

import butterknife.ButterKnife;
import butterknife.InjectView;

/**
 * Created by andy on 11/10/14.
 */
public abstract class ChildListActivity extends ActionBarActivity {

    @InjectView(android.R.id.list) RecyclerView list;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list);
        ButterKnife.inject(this);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        list.setLayoutManager(new LinearLayoutManager(this));
        list.addItemDecoration(new DividerItemDecoration(this, null));

        Item[] items = getItems();
        for(int i = 0; i < items.length; i++) {
            Item item = items[i];
            if(item.getListener() == null) {
                item.setListener(getOnClickListener(i)); // event type value corresponds to list position
            }
        }
        list.setAdapter(getAdapter(items));
    }

    protected abstract Item[] getItems();

    protected ItemsAdapter getAdapter(Item[] items) {
        return new ItemsAdapter(this, items);
    }

    private View.OnClickListener getOnClickListener(final int eventType) {
        return new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    SensorPipelineEvent event = new SensorPipelineEvent(getEventName(), getEventData(eventType));
                    SensorPipeline.getInstance().triggerEvent(event);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        };
    }

    protected abstract String getEventName();

    protected JSONObject getEventData(int eventType) throws JSONException {
        JSONObject data = new JSONObject();
        data.put("event_type", eventType);
        return data;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}
