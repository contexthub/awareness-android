package com.contexthub.awareness.push;

import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;

import com.chaione.contexthub.sdk.push.PushPayloadHandler;
import com.contexthub.awareness.R;

/**
 * Created by andy on 11/10/14.
 */
public class NotificationHandler implements PushPayloadHandler {

    private static final int NOTIFICATION_ID = 1;
    private static final String KEY_MESSAGE = "message";

    @Override
    public void handlePushPayload(Context context, Bundle bundle) {
        if(bundle.containsKey(KEY_MESSAGE)) {
            showNotification(context, bundle);
        }

    }

    private void showNotification(Context context, Bundle bundle) {
        String message = bundle.get(KEY_MESSAGE).toString();
        NotificationManager manager = NotificationManager.class.cast(context.getSystemService(Context.NOTIFICATION_SERVICE));
        Notification notification = new NotificationCompat.Builder(context)
                .setSmallIcon(R.drawable.ic_launcher)
                .setLargeIcon(BitmapFactory.decodeResource(context.getResources(), R.drawable.ic_launcher))
                .setContentTitle(context.getString(R.string.app_name))
                .setStyle(new NotificationCompat.BigTextStyle().bigText(message))
                .setContentText(message)
                .setAutoCancel(false)
                .setVibrate(new long[]{100, 500, 100, 500})
                .build();
        manager.notify(NOTIFICATION_ID, notification);
    }
}
