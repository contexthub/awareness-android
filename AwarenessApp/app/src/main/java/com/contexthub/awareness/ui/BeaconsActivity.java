package com.contexthub.awareness.ui;

import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.widget.Item;

/**
 * Created by andy on 11/10/14.
 */
public class BeaconsActivity extends ChildListActivity {

    @Override
    protected Item[] getItems() {
        return new Item[] {
                new Item(R.string.create_beacon, R.string.create_beacon_description),
                new Item(R.string.find_by_tagged, R.string.find_by_tagged_beacon_description),
                new Item(R.string.find_by_id, R.string.find_by_id_beacon_description),
                new Item(R.string.update_beacon, R.string.update_beacon_description),
                new Item(R.string.delete_beacon, R.string.delete_beacon_description),
        };
    }

    @Override
    protected String getEventName() {
        return "beacon_event";
    }
}
