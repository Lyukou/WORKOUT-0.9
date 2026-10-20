self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// 空 fetch 处理器，满足 Chrome 的 PWA 可安装性要求
self.addEventListener('fetch', () => {});