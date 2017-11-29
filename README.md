# vue-spring

# 基于Vue开发一套钱币网站
## 技术栈 
> vue2.0 + vue-router + vuex + axios + element + stylus + node

## **开始步骤**

0. 数据默认采用mongodb  需要自行安装mongodb

1. mongodb数据我本地测试存放在D:\mongodb\data

   cmd进入到D:\mongodb\bin目录下运行mongodb指令启动mongodb

>     mongod --dbpath d:\mongodb\data

2. 因为服务端这块采用node 需要启动node（切换到node目录下）

> npm run dev

3. 项目主目录启动项目  默认本地地址localhost:8088

> npm run dev

---
### 建议

1. 如果需要调试 nodejs debug模式调试借用中间件 node-inspector  
npm中运行下面代码 浏览器输入127.0.0.1:8080?port=5858 进入nodejs调试界面
2. 如果需要图形化处理查看mongodb数据 可以试试mongodb图形化工具Robomongo
---



node相关说明

1. state
    * 200 成功
    * 400 查询结果为空
    * 500 服务端内部错误

