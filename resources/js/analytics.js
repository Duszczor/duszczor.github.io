'use strict';

// GA4 bootstrap — wyodrębnione z index.html żeby script-src CSP nie potrzebowało 'unsafe-inline'.

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-DCF9642RF3");
