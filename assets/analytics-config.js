/* Medicare for All — Cloudflare Web Analytics, v1.3.
   Shared across the homepage, archive and all article pages. */
(function () {
  'use strict';
  const token = '10b4ae29f7da46d3a38502a8db7331bb';
  if (document.querySelector('script[data-cf-beacon]')) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({token}));
  document.head.appendChild(script);
})();
