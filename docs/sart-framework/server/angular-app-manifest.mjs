
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 5990, hash: '08fe413ac0157e163ec49327ea5eae9f29879123e443f1b5ed7b1a9b6d8454a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: '6eebb668b33f19274a989236452f4286560e1ce350861a7496da1d868c021736', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46183, hash: '22834d026c4692cd61a6b5f973ccf7ccca11d2c06e4b6c54cf760bdd223729d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-47UI33GZ.css': {size: 305388, hash: 'w6EmiWjJCtE', text: () => import('./assets-chunks/styles-47UI33GZ_css.mjs').then(m => m.default)}
  },
};
