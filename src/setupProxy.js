const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/pubticker",
//     createProxyMiddleware({
//       target: "https://api.bitfinex.com/v1",
//       changeOrigin: true,
//     })
//   );
// };
module.exports = function (app) {
  app.use(
    "/bitfinex-symbols",
    createProxyMiddleware({
      target: "https://api.bitfinex.com",
      changeOrigin: true,
      pathRewrite: {
        '^/bitfinex-symbols': '/v1/symbols'
      }
    })
  );
};
