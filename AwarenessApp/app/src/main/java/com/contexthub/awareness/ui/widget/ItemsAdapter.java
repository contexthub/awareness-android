package com.contexthub.awareness.ui.widget;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.contexthub.awareness.R;

/**
 * Created by andy on 11/10/14.
 */
public class ItemsAdapter extends RecyclerView.Adapter<ViewHolder> {

    protected Context context;
    protected Item[] items;

    public ItemsAdapter(Context context, Item[] items) {
        this.context = context;
        this.items = items;
    }
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.list_item, viewGroup, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int position) {
        Item item = items[position];
        viewHolder.text1.setText(item.getText1());
        viewHolder.text2.setText(item.getText2());
        if(item.getListener() != null) viewHolder.itemView.setOnClickListener(item.getListener());
    }

    @Override
    public int getItemCount() {
        return items.length;
    }
}
