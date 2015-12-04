# SingleUI

这是本人转向前端的第一个项目。

技术学习：gulp, mean(mongodb express angularjs nodejs), sass, jasmine

----------
进度：(前端相关)
1. 基本完成gulp相关配置

2. 功能：文章，类别的增删改查
----------

环境安装:
----------
1.nodejs

2.bower：npm install bower -g

3.gulp：npm install gulp -g


webui:
----------
配置: 进入webui目录下, 执行命令 npm install prebuild 安装相关包 (若相关的包安装失败, 请将它删掉在安装)

命令: 请查看package.json的scripts和build目录下相关任务配置

1. gulp: 开发版本, 使用本地mock数据

  1)文件复制

  2)sass编译
  
  3)html模板合并
  
  4)css和scripts的inject引用
  
  5)connect中间件
  
  6)watch 自动刷新
  
  7)单元测试和e2e测试可调试

2. gulp prod --env production 或 npm run publish, 编译成产品版本
  
  1)sass编译压缩重命名
  
  2)js合并压缩重命名  

  3)html模板合并压缩重命名
  
  4)css和scripts的inject引用

3. gulp server --env production : 编译产品版本, 使用本地mock数据

4. gulp test_singleRun --env production : 编译产品版本, 执行单元测试和e2e测试，输出相关报表

测试:
基于karma, 单元测试使用jammine, e2e测试用 ng-scenario, 输出报表有代码覆盖率karma-coverage, 执行结果报表junit-reporter
