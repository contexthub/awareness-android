package com.contexthub.awareness.ui;

import android.content.Context;
import android.support.v7.widget.SwitchCompat;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.widget.Item;
import com.contexthub.awareness.ui.widget.ItemsAdapter;
import com.contexthub.awareness.ui.widget.ViewHolder;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by andy on 11/10/14.
 */
public class PushActivity extends ChildListActivity {

    private boolean background;

    @Override
    protected Item[] getItems() {
        return new Item[] {
                new Item(R.string.push_to_token, R.string.push_to_token_description),
                new Item(R.string.push_to_device_id, R.string.push_to_device_id_description),
                new Item(R.string.push_to_alias, R.string.push_to_alias_description),
                new Item(R.string.push_to_tag, R.string.push_to_tag_description),
                new Item(R.string.background, R.string.background_description, new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        SwitchCompat backgroundSwitch = (SwitchCompat) v.findViewById(R.id.push_background_switch);
                        backgroundSwitch.toggle();
                        background = backgroundSwitch.isChecked();
                    }
                })
        };
    }

    @Override
    protected ItemsAdapter getAdapter(Item[] items) {
        return new PushItemsAdapter(this, items);
    }

    @Override
    protected String getEventName() {
        return "push_event";
    }

    @Override
    protected JSONObject getEventData(int eventType) throws JSONException {
        JSONObject data = super.getEventData(eventType);
        data.put("push_mode", background);
        return data;
    }

    class PushItemsAdapter extends ItemsAdapter {

        private static final int VIEW_TYPE_DEFAULT = 0;
        private static final int VIEW_TYPE_SWITCH = 1;

        public PushItemsAdapter(Context context, Item[] items) {
            super(context, items);
        }

        @Override
        public int getItemViewType(int position) {
            return position != items.length - 1 ? VIEW_TYPE_DEFAULT : VIEW_TYPE_SWITCH;
        }

        @Override
        public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {
            if(viewType == VIEW_TYPE_DEFAULT) {
                return super.onCreateViewHolder(viewGroup, viewType);
            }
            else {
                View view = LayoutInflater.from(context).inflate(R.layout.switch_list_item, viewGroup, false);
                return new ViewHolder(view);
            }
        }
    }
}
