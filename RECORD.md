# 记录开发遇到的坑
> 1. 服务代理跨域
-------------
* axios本身不支持跨域 度娘说要用本地代理 好 修改config/index.js的proxyTable中间件 
>
```
proxyTable: {
    '/auction/user/goRegister': {
        target: 'http://47.94.131.157:8080/auction/user/goRegister',
        changeOrigin: true
    }      
}
```
>
* 没效果 死活跨域报错  后来不用多层路径成功 代码如下
>
```
proxyTable: {
    '/auction': {
        target: 'http://47.94.131.157:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/auction': '/auction'
        }
    }      
}
```
> 2. vee-validate与element-ui bug
>> el-input 标签下 vee-validate的confirmed失效  改用input解决 