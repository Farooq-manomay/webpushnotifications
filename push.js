var push = require('web-push');

let vapidkeys = {
    publicKey: 'BA9y7TXQVGodMg9UvIamvB19lYb-ndgDyakDcm6dKNTKNW_-zMsbQpRzN5hEor4VsbfpZv3cEcI-U-t2' +
            'ie_lJW0',
    privateKey: 'XTIqGhOhdVBKfJk5Km5hRssB6E2eka-e3DvbAdLU06Y'
}

push.setVapidDetails('mailto:test@code.co.in', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eLAPhkPYMSw:APA91bEKyIKMB10IAj8tsBSt5sTJzMm2" +
            "JIK7tK2QR9LrJY9pt-udijEcMFOZuZhOkSlzOlUfHkvEVFQjESlVlUJh-7kZrUarVMKDlPnKtE_Uam4M" +
            "nEBBpw2pBEGwj3c3REmvyOsHdPd7",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCBSgdnFIJhslTlZQQAKiRAFjhvQ9eBr4bXmN1dzkVIRUMCjpYgX942gpB_9FjB9a3DWqL9pmlR7DnM8" +
                "jbk217o",
        "auth": "zHXltPDSOeAKDmMjLzqGvg"
    }
};

push.sendNotification(sub, 'test message')