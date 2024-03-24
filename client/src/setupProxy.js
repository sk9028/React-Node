const { createProxyMiddleware } = require('http-proxy-middleware');

// 프론트엔드에서 서비스를 보낼때 5000번 포트로 보내겠다 라는 정의
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};