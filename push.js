var push = require('web-push');

let vapidkeys = {
    publicKey: 'BA9y7TXQVGodMg9UvIamvB19lYb-ndgDyakDcm6dKNTKNW_-zMsbQpRzN5hEor4VsbfpZv3cEcI-U-t2ie_lJW0',
    privateKey: 'XTIqGhOhdVBKfJk5Km5hRssB6E2eka-e3DvbAdLU06Y'
  }

push.setVapidDetails('mailto:test@code.co.in', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')