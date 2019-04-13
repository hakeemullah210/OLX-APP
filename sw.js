/* ======================== PWA START ======================== */

const cacheName = 'OLX-APP';
const staticAssets = [
        './',
        './index.html',

        './js/app.js',
        './js/category-ad.js',
        './js/chat.js',
        './js/submit-ad.js',
        './js/fb-auth.js',
        './js/render-ad.js',

        './pages/bikes.html',
        './pages/cars.html',
        './pages/category-ad.html',
        './pages/chat.html',
        './pages/electronic.html',
        './pages/mobile.html',
        './pages/Sign-up.html',
        './pages/submit-ad.html',

        './manifest.webmanifest',
        './css/style.css',
        './img/BPL_PC_TV_banner.jpg'

]

self.addEventListener('install', event => {
    console.log('[ServiceWorker] Install');
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(staticAssets);
        })
    );
})

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request)
        }).catch(function(error) {
            console.log(error)
        }).then(function(response) {
            return caches.open(cacheName).then(function(cache) {
                if (event.request.url.indexOf('test') < 0) {
                    cache.put(event.request.url, response.clone());
                }
                return response;
            })
        })

    );
});





//---------old one---------------------
// const cacheName = 'OLX';
// const staticAssets = [
//         './',
//         './index.html',
//         './js/app.js',
//         './js/fb-auth.js',
//         './js/render-ad.js',
//         './manifest.webmanifest',
//         './css/style.css',
//         './img/BPL_PC_TV_banner.jpg'
// ]

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(cacheName).then(function(cache) {
//           console.log('[ServiceWorker] Caching app shell');
//           return cache.addAll(staticAssets);
//         })
//       );
// })
// self.addEventListener('fetch', event => {
//     const req = event.request;
//     const url = new URL(req.url);
//     if (url.origin === location.origin) {
//         event.respondWith(cacheFirst(req))
//     } else {
//         event.respondWith(networkFirst(req))
//     }
// })

// async function cacheFirst(req) {
//     const cacheResponse = await caches.match(req);
//     return cacheResponse || fetch(req);
// }

// async function networkFirst(req) {
//     const cache = await caches.open(cacheName);
//     try {
//         const res = await fetch(req);
//         cache.put(req, res.clone())
//         return res
//     } catch (error) {
//         return await cache.match(req)
//     }
// }
