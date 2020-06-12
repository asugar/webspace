
html
css
javascript


npm命令

// 永久修改镜像地址
npm config set registry https://registry.npm.taobao.org
// 临时修改镜像地址
npm --registry https://registry.npm.taobao.org install express


// 配置后可通过下面方式来验证是否成功 
npm config get registry
或 
npm info express
