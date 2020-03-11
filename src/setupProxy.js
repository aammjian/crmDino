
const proxy = require('http-proxy-middleware'); 

module.exports = function(app) {
  app.use(
    '/api',
    //此处大坑，官方上面直接是将proxy作为一个函数来使用的
    proxy.createProxyMiddleware({  
      target: 'http://www.91cotton.com:9118',      
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
  app.use(
    '/local', 
    proxy.createProxyMiddleware({  
      target: 'http://192.168.1.120:9118/advance/api/web',      
      changeOrigin: true,
      pathRewrite: {
        '^/local': ''
      }
    })
  );
};