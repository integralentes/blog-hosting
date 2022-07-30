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
    "revision": "247b68cb22de4adb6e9ce3061ac53712"
  },
  {
    "url": "2022/07/16/glaucoma-degradacion-visual/index.html",
    "revision": "293b28acf91ed73232e34a649a949ba9"
  },
  {
    "url": "2022/07/20/astigmatismo/index.html",
    "revision": "c93ba4ec310ac35d1b246cc7245d6389"
  },
  {
    "url": "404.html",
    "revision": "15d113b42b88e28159858e0fea0795b1"
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
    "url": "assets/img/tipos-de-astigmatismo.ebf137ad.jpg",
    "revision": "ebf137ad476a143962776c222d9b47eb"
  },
  {
    "url": "assets/js/10.68f0558d.js",
    "revision": "4451db705d81b720b7e761acf8854761"
  },
  {
    "url": "assets/js/11.c8257e9c.js",
    "revision": "f24a77192d6e3df69fdbf51ae3fe8613"
  },
  {
    "url": "assets/js/12.6c5abebe.js",
    "revision": "79bc292c26dab87fc6cf454443945a1e"
  },
  {
    "url": "assets/js/13.14cc3a51.js",
    "revision": "9230cc38ee9d901ca4d43113fd234a03"
  },
  {
    "url": "assets/js/14.9661d227.js",
    "revision": "935a799d2c3c51ec13109398c2f1bf9c"
  },
  {
    "url": "assets/js/15.f3a2f663.js",
    "revision": "0e0e61202dd2f6a2e0a7d9678874dc0e"
  },
  {
    "url": "assets/js/16.af44f28c.js",
    "revision": "aae66961c792950dd62a1c9c6224d1a7"
  },
  {
    "url": "assets/js/3.5f672be2.js",
    "revision": "c9a939a921eef5f22f45e9073fdeebf2"
  },
  {
    "url": "assets/js/4.4b99573b.js",
    "revision": "c7e6bcd65e3fb179c48083438076523d"
  },
  {
    "url": "assets/js/5.20c34f2b.js",
    "revision": "f68ddab77fa13d92e57a54b23ce2a850"
  },
  {
    "url": "assets/js/6.849d5cef.js",
    "revision": "07be8da4a9fc8037aa508996f5d9fa24"
  },
  {
    "url": "assets/js/7.bed5cd88.js",
    "revision": "105e04c9d2eee9293749548dbcab40f3"
  },
  {
    "url": "assets/js/8.3449d651.js",
    "revision": "8683d9d03013c125902f9e68aa504f65"
  },
  {
    "url": "assets/js/9.8040d13b.js",
    "revision": "8c03998327a1bd44f99793a0d47dd5ce"
  },
  {
    "url": "assets/js/app.c87a386b.js",
    "revision": "bce624cfff065ebc8a7fa5319f5344bb"
  },
  {
    "url": "assets/js/vuejs-paginate.10377364.js",
    "revision": "f46994598d24a01c017efe6881657beb"
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
    "revision": "bdff8a998e55333992b148436ab12645"
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
    "url": "tag/index.html",
    "revision": "359201f287d392ad94d9fb035d9b39e8"
  },
  {
    "url": "tag/prevención/index.html",
    "revision": "4a74f8c86570bd893154ade8afbd7244"
  },
  {
    "url": "tag/salud/index.html",
    "revision": "654037e4bae6e52245f147c2f70a3d78"
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
