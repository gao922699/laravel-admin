# 介绍
一个基于element-ui的简单后台

![demo](http://blog-admin.gaoqinghd.com/upload/image/20190202/1549075289300888.png)

## 使用步骤
- 复制.env.sample文件到.env,修改数据库配置
- docker-compose up -d
- 进入php容器
    - composer install
    - php artisan migrate
- 进入node容器
    - npm install
    - npm run dev(watch)

## 用到的组件
- element-ui
- axios
- router
- vuex

后台入口：
http://127.0.0.1:8110/admin

示例用户密码：
admin@domain.com
111111