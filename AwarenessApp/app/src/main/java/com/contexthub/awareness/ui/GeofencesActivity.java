package com.contexthub.awareness.ui;

import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.widget.Item;

/**
 * Created by andy on 11/10/14.
 */
public class GeofencesActivity extends ChildListActivity {

    @Override
    protected Item[] getItems() {
        return new Item[] {
                new Item(R.string.create_geofence, R.string.create_geofence_description),
                new Item(R.string.find_by_tagged, R.string.find_by_tagged_geofence_description),
                new Item(R.string.find_by_id, R.string.find_by_id_geofence_description),
                new Item(R.string.update_geofence, R.string.update_geofence_description),
                new Item(R.string.delete_geofence, R.string.delete_geofence_description),
        };
    }

    @Override
    protected String getEventName() {
        return "geofence_event";
    }
}
