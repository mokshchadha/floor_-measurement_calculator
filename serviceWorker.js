// const CACHE_NAME = "version-1";
// const urlsToCache = ["index.html", "offline.html", "index-a521b3ed.js"];

// const self = this; // we do this part to get rid of the google warning

// // install sw
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("opeaned cache: ");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // listen for req
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((e) => {
//       return fetch(event.request).catch((e) => {
//         caches.match("offline.html"); // if there is no internet connection then fetch offline
//       });
//     })
//   );
// });

// //activate the worker - to handle the flushing of cache as we might have many versions of cache
// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
