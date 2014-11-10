package com.contexthub.awareness.ui;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.ActionBarActivity;

import com.astuetz.PagerSlidingTabStrip;
import com.contexthub.awareness.R;
import com.contexthub.awareness.ui.fragments.AboutFragment;
import com.contexthub.awareness.ui.fragments.ContextualObjectsFragment;

import butterknife.ButterKnife;
import butterknife.InjectView;


public class MainActivity extends ActionBarActivity {

    @InjectView(R.id.tab_strip) PagerSlidingTabStrip tabStrip;
    @InjectView(R.id.view_pager) ViewPager viewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.inject(this);
        viewPager.setAdapter(new PagerAdapter(getSupportFragmentManager()));
        tabStrip.setViewPager(viewPager);
    }

    class PagerAdapter extends FragmentPagerAdapter {

        private final int[] TITLES = new int[]{R.string.objects, R.string.about};

        public PagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public CharSequence getPageTitle(int position) {
            return getString(TITLES[position]);
        }

        @Override
        public Fragment getItem(int position) {
            switch (position) {
                case 0:
                    return new ContextualObjectsFragment();
                case 1:
                    return new AboutFragment();
            }
            return null;
        }

        @Override
        public int getCount() {
            return TITLES.length;
        }
    }
}
