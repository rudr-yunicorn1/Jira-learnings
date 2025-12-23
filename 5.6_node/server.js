const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

let subscriptions = [];

/* 1️⃣ Generate VAPID keys (run once)
webPush.generateVAPIDKeys()
*/

const vapidKeys = {
  publicKey: 'BJ3G1r5Ypsikt9bGAaIl2NuKejaXCo47m5aTU2XBakllMtmOV7ZnRmRZ1CMVEa5meSaoX2S3Jgr2Ar2YXQYLPAg',
  privateKey: 'ogiiYd4HgZPhbEQp54_2RLqfCs2BqwqLy5vtGyfkxJk'
};

webPush.setVapidDetails(
  'mailto:test@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

/* 2️⃣ Save subscription */
app.post('/subscribe', (req, res) => {
  subscriptions.push(req.body);
  res.status(201).json({ message: 'Subscribed successfully' });
});

/* 3️⃣ Send push notification */
app.post('/send', (req, res) => {
  const payload = JSON.stringify({
    title: 'Node Push Notification 🚀',
    body: 'This is a working push notification!',
  });

  subscriptions.forEach(sub => {
    webPush.sendNotification(sub, payload).catch(err => console.error(err));
  });

  res.json({ message: 'Notification sent' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
