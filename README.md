# vue-spring

# 基于Vue开发一套钱币网站
## 技术栈 
> vue2.0 + vue-router + vuex + axios + element + stylus + node

## **开始步骤**

1. 切换到node目录下 运行相关运行指令

>     supervisor --debug ./bin/www

2. mongodb数据我本地测试存放在D:\mongodb\data

3. mongodb图形化工具Robomongo 启动mongodb服务

4. CMD进入到D:\mongodb\bin目录下运行mongodb指令

>     mongod --dbpath d:\mongodb\data

5. D:\mongodb\data\db  来启动mongo服务器127.0.0.1:27017

6. 启动项目  npm run dev

7. 如果需要调试 nodejs debug模式调试借用中间件 node-inspector  
npm中运行下面代码 浏览器输入127.0.0.1:8080?port=5858 进入nodejs调试界面

```
node-inspector 
```



node相关说明

1. state
    * 200 成功
    * 400 查询结果为空
    * 500 数据库内部错误

