// Service Worker for Aggressive Caching - Enterprise Performance Strategy
const CACHE_NAME = 'mandin-v1.2';
const CRITICAL_CACHE = 'mandin-critical-v1.2';

// Resources to cache immediately for instant loading
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/components/Hero.tsx',
  '/src/index.css',
  '/src/assets/Logo.png',
  '/src/assets/fonts/Denton-Bold.otf',
  '/src/assets/fonts/Gilroy-Regular.ttf'
];

// Background cache resources
const SECONDARY_RESOURCES = [
  '/src/index.css',
  '/src/assets/2288.mp4',
  '/src/components/Services.tsx',
  '/src/components/Blogs.tsx',
  '/src/components/Footer.tsx'
];

// Install - Cache critical resources immediately
self.addEventListener('install', event => {
  console.log('SW: Installing service worker for instant loading');
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(CRITICAL_CACHE).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES);
      }),
      // Cache secondary resources in background
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(SECONDARY_RESOURCES.slice(0, 3)); // Cache first 3 items immediately
      })
    ]).then(() => {
      self.skipWaiting(); // Activate immediately
    })
  );
});

// Activate - Clean old caches and take control
self.addEventListener('activate', event => {
  console.log('SW: Activating for instant performance');
  
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== CRITICAL_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control immediately
      self.clients.claim()
    ])
  );
});

// Fetch - Instant loading strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Strategy 1: Critical resources - Cache First (Instant loading)
  if (CRITICAL_RESOURCES.some(resource => url.pathname.includes(resource))) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          console.log('SW: Serving from cache (instant):', url.pathname);
          return cachedResponse;
        }
        
        // If not cached, fetch and cache
        return fetch(request).then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CRITICAL_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  
  // Strategy 2: Fonts - Cache First with long TTL
  if (url.pathname.includes('/fonts/')) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request).then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  
  // Strategy 3: Images/Video - Cache First with background refresh
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|mp4|mov)$/)) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        const fetchPromise = fetch(request).then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
        
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }
  
  // Strategy 4: API/Dynamic content - Network First with cache fallback
  if (url.pathname.includes('/api/') || url.pathname.includes('/data/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }
  
  // Strategy 5: Everything else - Stale While Revalidate
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const fetchPromise = fetch(request).then(response => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return response;
      });
      
      // Return cached version immediately, update in background
      return cachedResponse || fetchPromise;
    })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Pre-cache remaining resources
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(SECONDARY_RESOURCES.slice(3));
      })
    );
  }
});

// Push notifications for updates
self.addEventListener('push', event => {
  const options = {
    body: 'ManDin Studios has been updated for better performance!',
    icon: '/src/assets/Logo.png',
    badge: '/src/assets/Logo.png'
  };
  
  event.waitUntil(
    self.registration.showNotification('Site Updated', options)
  );
}); 