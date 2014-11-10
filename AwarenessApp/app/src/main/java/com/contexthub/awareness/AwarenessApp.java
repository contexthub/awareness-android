package com.contexthub.awareness;

import android.app.Application;
import android.os.Build;
import android.widget.Toast;

import com.chaione.contexthub.sdk.ContextHub;
import com.chaione.contexthub.sdk.SensorPipelineEvent;
import com.chaione.contexthub.sdk.SensorPipelineListener;
import com.chaione.contexthub.sdk.push.Push;
import com.contexthub.awareness.push.NotificationHandler;
import com.contexthub.awareness.ui.MainActivity;

import java.util.Arrays;

/**
 * Created by andy on 11/5/14.
 */
public class AwarenessApp extends Application implements SensorPipelineListener {

    @Override
    public void onCreate() {
        super.onCreate();
        ContextHub.init(this, "YOUR-APP-ID-HERE");
        ContextHub.getInstance().addSensorPipelineListener(this);
        Push.init(this, "YOUR-GCM-PROJECT-ID-HERE", Build.MODEL, Arrays.asList("device-tag"),
                MainActivity.class, new NotificationHandler());
    }

    @Override
    public void onEventReceived(SensorPipelineEvent event) {
    }

    @Override
    public boolean shouldPostEvent(SensorPipelineEvent sensorPipelineEvent) {
        return true;
    }

    @Override
    public void onBeforeEventPosted(SensorPipelineEvent sensorPipelineEvent) {
    }

    @Override
    public void onEventPosted(SensorPipelineEvent sensorPipelineEvent) {
        Toast.makeText(this, getString(R.string.event_posted, sensorPipelineEvent.getName()), Toast.LENGTH_SHORT).show();
    }
}
