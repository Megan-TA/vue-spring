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

## web

1. token验证

    [几种常用的认证机制](https://www.cnblogs.com/chris-oil/p/4890459.html)

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
    // 添加过滤条件 select
    // path 需要填充数据的字段 （对应ref）
     _Auction.find({})
            .populate({
                path: '_list',
                select: 'list.title list.imgUrl.url'
            })
            .exec((err, doc) => {
                if (err) throw err
                console.log(doc)
                res.json(doc[0]._list.list)
            })
    ```

    ---

    相关链接

    1.   [Mongoose使用population建立关系链接实例说明](http://www.jianshu.com/p/1c98bf94802d)

    2. [mongodb中的populate方法详细api](http://blog.csdn.net/hellochenlu/article/details/50467563)

        
5. 插入时间少8H

    相关链接

    1. [MongoDB 时区问题](http://blog.csdn.net/erica_1230/article/details/42551175)

6. 查询/更新

    相关链接

    1. [MongoDB查询（数组、内嵌文档）](http://blog.csdn.net/congcong68/article/details/46919227)

    2. [mongoose中通过-id查询的方法](http://blog.csdn.net/naihejiang/article/details/52769471)

    3. [mongodb获取具体某一天的查询语句](http://blog.csdn.net/u013066244/article/details/51136224)

    4. [Mongose 参考手册](http://cnodejs.org/topic/548e54d157fd3ae46b233502)

    5. [Mongose详细数组修改操作](http://blog.csdn.net/legend_x/article/details/11617627)

    6. [mongoose批量更新数据](http://mongoosejs.com/docs/api.html#model_Model.bulkWrite)


8. E11000 duplicate key error index (索引重复)

    坑啊 早知道还不如用mysql

    解决 删除索引

    ```
    db.user.getIndexes()
    db.user.dropIndex("objectId_1")
    ```

    相关链接

    1. [Mongoengine create_user function generating null objectId's](https://stackoverflow.com/questions/17431698/mongoengine-create-user-function-generating-null-objectids)


> ### multetr(上传图片插件)

貌似name不能为multer 之前使用一直报错

> ### 网络安全

    1. XSS

    2. CDRF

    相关链接：

1. [ 关于XSS（跨站脚本攻击）和CSRF（跨站请求伪造）](http://cnodejs.org/topic/50463565329c5139760c34a1)

> ### element-ui坑

1. element-ui验证使用async-valid库

有个bug  在指定类型type='number' 在校验数字 始终不对