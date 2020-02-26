# nest-blog-api

使用nest搭建的博客API项目。

## 一、依赖安装

```bash
$ yarn
```

## 二、运行应用

```bash
# 开发模式
$ npm run start

# watch 模式
$ npm run start:dev

# 生成模式
$ npm run start:prod
```

## 三、测试

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 四、开发事项

### 4.1 用`nest`创建一个模块

> nest g mo posts

### 4.2 用`nest`创建一个控制器

> nest g co posts

### 4.3 如何配置 Swagger

[参考链接](https://docs.nestjs.cn/6/recipes?id=openapi-swagger)

## 五、注意事项

### 5.1 安装 `mongoose` 所需的依赖包

> yarn add @typegoose/typegoose @types/mongoose mongoose nestjs-typegoose

### 5.2 添加全局验证所需的依赖包

> yarn add class-validator class-transformer

添加验证，需要安装如下依赖：一个用于验证、一个用于数据格式的转换。

## License

  Nest is [MIT licensed](LICENSE).