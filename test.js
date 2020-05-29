function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  
  const vapidPublicKey = 'BA9y7TXQVGodMg9UvIamvB19lYb-ndgDyakDcm6dKNTKNW_-zMsbQpRzN5hEor4VsbfpZv3cEcI-U-t2' + 'ie_lJW0';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
  console.log("convertedKey",convertedVapidKey);