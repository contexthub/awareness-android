package com.contexthub.awareness.ui;

import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.widget.Item;

/**
 * Created by andy on 11/10/14.
 */
public class VaultActivity extends ChildListActivity {

    @Override
    protected Item[] getItems() {
        return new Item[] {
                new Item(R.string.create_vault_item, R.string.create_vault_item_description),
                new Item(R.string.find_by_tagged, R.string.find_by_tagged_vault_item_description),
                new Item(R.string.find_by_id, R.string.find_by_id_vault_item_description),
                new Item(R.string.update_vault_item, R.string.update_vault_item_description),
                new Item(R.string.delete_vault_item, R.string.delete_vault_item_description),
                new Item(R.string.contains_keyword, R.string.contains_keyword_description),
                new Item(R.string.key_path_search, R.string.key_path_search_description),
        };
    }

    @Override
    protected String getEventName() {
        return "vault_event";
    }
}
