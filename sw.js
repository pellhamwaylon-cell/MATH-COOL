importScripts('https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js');
importScripts('./uv.config.js'); // Added dot here
importScripts('https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js');

const sw = new UVServiceWorker();
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        if (sw.route(event)) return await sw.fetch(event);
        return await fetch(event.request);
    })());
});
