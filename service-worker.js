/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2022/07/15/diabetes-problemas-vision/index.html",
    "revision": "2d19bde1c7e0a89558f891bda30f92d2"
  },
  {
    "url": "2022/07/18/glaucoma-degradacion-visual/index.html",
    "revision": "b16151d13a870bfa97aae103ed5c8a57"
  },
  {
    "url": "404.html",
    "revision": "988d0c3ab305447c2e2fd13770d0e401"
  },
  {
    "url": "assets/css/0.styles.9c768c57.css",
    "revision": "a853acaa1071db9c871484e5bd878700"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4610f2e.js",
    "revision": "57889a02bae501d0c35065ada14a21a8"
  },
  {
    "url": "assets/js/11.0f15c717.js",
    "revision": "120048acc69712e96b1745a77a69e1dd"
  },
  {
    "url": "assets/js/12.d4b042e2.js",
    "revision": "c187fca2407e9922528c84e4ad9aedb5"
  },
  {
    "url": "assets/js/13.ac2149ab.js",
    "revision": "2381c59476bed6e1e7def496e4e60eb6"
  },
  {
    "url": "assets/js/14.da13e6a0.js",
    "revision": "fedfdf67dce0dea4f1feac6656e879b5"
  },
  {
    "url": "assets/js/15.69306b1e.js",
    "revision": "2501b7e4356c930950e6a7722b16ab3a"
  },
  {
    "url": "assets/js/3.2b037816.js",
    "revision": "a611a38acf9543935ca3035abdf6c452"
  },
  {
    "url": "assets/js/4.ca49e82d.js",
    "revision": "87f049ecfd56fc816456a3e25b5ce331"
  },
  {
    "url": "assets/js/5.9e4af743.js",
    "revision": "5b70403fef32e17206e0e2c44117a43c"
  },
  {
    "url": "assets/js/6.a30d2606.js",
    "revision": "a3294b877005576b0c8e00610418fd4e"
  },
  {
    "url": "assets/js/7.707271e1.js",
    "revision": "34d1391912423b3f6a18c00ad689a6b8"
  },
  {
    "url": "assets/js/8.4234d241.js",
    "revision": "85a065c80da0484a5aed9e0c87e288a9"
  },
  {
    "url": "assets/js/9.5ce0c528.js",
    "revision": "f34af480d5068beee2c32d33c54f5c5d"
  },
  {
    "url": "assets/js/app.542cb13b.js",
    "revision": "696db61cd000e48880b9df254971a8e7"
  },
  {
    "url": "assets/js/vuejs-paginate.0a28ebc1.js",
    "revision": "00218330226e545c74fcf5b024e1d793"
  },
  {
    "url": "avatars/alexandra.jpg",
    "revision": "58149d028f7d37bbd075771d7a358159"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "14ad0f57855d36fc3992ae3f741db8de"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "9fee179aa2ca91fa9bd89236c5e7b152"
  },
  {
    "url": "index.html",
    "revision": "570482f333ddf4b23c9b592e130b99c4"
  },
  {
    "url": "logo.png",
    "revision": "36d198d81ed74bd8b211e9d3d70decb2"
  },
  {
    "url": "photos/2022/diabetes.jpg",
    "revision": "dfac69856f6c25a0b3acb20adc0f79de"
  },
  {
    "url": "photos/2022/examen.png",
    "revision": "f9595e4d9f374149e6510fbf45f42723"
  },
  {
    "url": "photos/2022/preguntas.png",
    "revision": "d13d6062bec97b315c2f1c11b33b1e10"
  },
  {
    "url": "photos/2022/testing.png",
    "revision": "d6212119661df18e21e5251e183702a9"
  },
  {
    "url": "tag/diabetes/index.html",
    "revision": "e5f5a1cc5aeaf69addf084165ced8309"
  },
  {
    "url": "tag/glaucoma/index.html",
    "revision": "6220b8847e801c7d2dd7c20cfe996ed1"
  },
  {
    "url": "tag/index.html",
    "revision": "a199af61acd85b4976a7b6c8ab1ab3ef"
  },
  {
    "url": "tag/prevención/index.html",
    "revision": "dd2c9dd5a6d099ba46990ff92122c077"
  },
  {
    "url": "tag/saludvisual/index.html",
    "revision": "942ca010faaef787653d057ec92d12f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
