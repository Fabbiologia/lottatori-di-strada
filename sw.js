// Lottatori di Strada - funziona anche senza rete e si aggiorna da solo.
const VERSIONE='lds-69';
const FILE=['./','./index.html','./manifest.webmanifest','./icona-192.png','./icona-512.png','./online-lib.js','./online-config.js'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSIONE).then(c=>c.addAll(FILE))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSIONE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  if(u.origin===location.origin){ // prima la rete (cosi' arrivano gli aggiornamenti), poi la copia salvata
    e.respondWith(fetch(r).then(res=>{ const c=res.clone(); caches.open(VERSIONE).then(x=>x.put(r,c)); return res; }).catch(()=>caches.match(r).then(x=>x||caches.match('./index.html'))));
  } else if(u.hostname.endsWith('fonts.googleapis.com')||u.hostname.endsWith('fonts.gstatic.com')){ // caratteri: copia salvata
    e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{ const c=res.clone(); caches.open(VERSIONE).then(y=>y.put(r,c)); return res; })));
  }
});
