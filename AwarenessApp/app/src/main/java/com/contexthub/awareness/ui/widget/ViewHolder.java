package com.contexthub.awareness.ui.widget;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

import butterknife.ButterKnife;
import butterknife.InjectView;

/**
* Created by andy on 11/10/14.
*/
public class ViewHolder extends RecyclerView.ViewHolder {
    @InjectView(android.R.id.text1) TextView text1;
    @InjectView(android.R.id.text2) TextView text2;

    public ViewHolder(View view) {
        super(view);
        ButterKnife.inject(this, view);
    }
}
