package com.contexthub.awareness.ui.widget;

import android.view.View;

/**
 * Created by andy on 11/10/14.
 */
public class Item {

    private int text1;
    private int text2;
    private View.OnClickListener listener;

    public Item(int text1, int text2) {
        this.text1 = text1;
        this.text2 = text2;
    }

    public Item(int text1, int text2, View.OnClickListener listener) {
        this(text1, text2);
        this.listener = listener;
    }

    public int getText1() {
        return text1;
    }

    public int getText2() {
        return text2;
    }

    public View.OnClickListener getListener() {
        return listener;
    }

    public void setListener(View.OnClickListener listener) {
        this.listener = listener;
    }
}
