const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/bitfinex-symbols",
    createProxyMiddleware({
      target: "https://api.bitfinex.com",
      changeOrigin: true,
      pathRewrite: {
        '^/bitfinex-symbols' : '/v1/symbols'
      }
    })
  );

  // app.use(
  //   "/bitfinex-pubticker/*",
  //   createProxyMiddleware({
  //     target: "https://api.bitfinex.com",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/bitfinex-pubticker' : '/v1/pubticker'
  //     }
  //   })
  // );
};
