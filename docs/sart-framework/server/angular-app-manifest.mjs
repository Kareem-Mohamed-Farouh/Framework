
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
    'index.csr.html': {size: 5990, hash: 'f1cbdb3e0e5610dfc01829ba206eb2bfcabf97702437d36c8f63161e7b1f1735', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: '64213c51bd3ca73cfe81e0b2cb5acb75cc90d814074b823d0d758264b8837b4d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46239, hash: '54bcae9ff1ae0e828d15de97b4ef9cb70ceb9ef11a0f80038b08ffbd84e5e3ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-47UI33GZ.css': {size: 305388, hash: 'w6EmiWjJCtE', text: () => import('./assets-chunks/styles-47UI33GZ_css.mjs').then(m => m.default)}
  },
};
