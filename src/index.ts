import './css/styles';

import 'core-js/actual';

document.querySelectorAll('link[rel="preload"][as="style"]').forEach((link) => {
  if (link instanceof HTMLLinkElement) {
    link.rel = 'stylesheet';
  }
});

import './observability';

void import('./bootstrap');
