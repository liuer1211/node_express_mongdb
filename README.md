# 创建项目
    express -e project
# 下载依赖
    npm install
# 热加载
    npm install nodemon -g
    修改配置文件package.json
    "start": "nodemon ./bin/www"
# 启动项目
    npm start
    访问：localhost:3000
# 初始mongodb
    前提先安装mongodb
    启动：C:\Users\user>mongod  【这里是自己电脑的安装目录】
# 连接数据库，创建表
    _>mongo
    _>use project
    _>db.createCollections("users")
    _>show collections
    _>db.users.insertOne({name:'jack'})
# 安装mongodb
    npm install mongodb --save
    
