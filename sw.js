self.addEventListener('push', ()=>{
    self.ServiceWorkerRegistration.sendNotification('test Notification', {})
})