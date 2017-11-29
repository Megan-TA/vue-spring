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

> 3. vuex 刷新数据恢复初始值  无法长时间记忆  不适合注册登录状态的记忆

## mongoose使用遇到的坑 ##

1. 连接数据库方法 由connect变为createConnection

2. model创建必须调用连接数据库成功之后的对象db

3. model创建集合的名称 会自动判断是否可以复数  如果是 自动修改名称为复数名称第三个参数可以强制指定我们需要落库的名称

4. 多表关联 ref

    moongose通过populate这个api进行关联 

    另外ref中的值必须存要关联表名中document中自动生成的_id

    实例save之后再进行populate操作

    ```
    let newList = new List({
        _list: newAuction._id
    })
    newList.save((err) => {
        if (err) throw err
    })

    List.find()
        .populate('_list')
        .exec((err, doc) => {
            if (err) throw err
            console.log(doc)
        })
    ```


> ### multetr

貌似name不能为multer 之前使用一直报错