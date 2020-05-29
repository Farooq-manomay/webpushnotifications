var push = require('web-push');

let vapidkeys = {
    publicKey: 'BA9y7TXQVGodMg9UvIamvB19lYb-ndgDyakDcm6dKNTKNW_-zMsbQpRzN5hEor4VsbfpZv3cEcI-U-t2' +
            'ie_lJW0',
    privateKey: 'XTIqGhOhdVBKfJk5Km5hRssB6E2eka-e3DvbAdLU06Y'
}

push.setVapidDetails('mailto:test@code.co.in', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = [
    {
        "endpoint": "https://fcm.googleapis.com/fcm/send/carvFwGSnt8:APA91bEJI9DYxuNcvBd1WkkqjMJ65-6P" +
            "1mdcfQqbGJ2EEMgxdwT5ueuImKm5-2EDmsVORQ93FHHfSMraKlJltA8fPZbMRseTmf9kfJXxMCM5tDmL" +
            "BSCx0lsSJ3Pw96r5A9Xio9FjBB3E",
        "expirationTime": null,
        "keys": {
            "p256dh": "BG_caYLnZCK-45iqMbcmtLQtd6RK-kqCHBXY2BdOi1Pwhm_qEHpd5PlaqFTEFuwnhCcxAvhbHiDzBHLs" +
                "pjyxv78",
            "auth": "52dgKrv7fTe6y2Zr0Uf7og"
        }
    }

];
let payLoad = JSON.stringify({
    "notification": {
      "title": "The push notification title",
      "actions": [
        {
          "action": "actionOne",
          "title": "Action One"
        }
      ],
      "body": "The is the body which will be shown on notification",
      "dir": "auto",
      "icon": "path to icon",
      "badge": "path to badge",
      "lang": "en",
      "renotify": true,
      "requireInteraction": true,
      "tag": 926796012340920300,
      "vibrate": [300, 100, 400],
      "data": {
        // this object can contain arbitrary info
      }
    }
  });
// for (var i in sub){   console.log(sub[i]); }
for (var i in sub) {
    push.sendNotification(sub[i], payLoad)
}