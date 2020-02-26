import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 将把它设置为一个全局作用域的管道，用于整个应用程序中的每个路由处理器。管道有点类似中间件的概念
  app.useGlobalPipes(new ValidationPipe()) // 添加验证管道

  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('NestJs第一个项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);  // 将接口文档挂载在哪个路径下

  await app.listen(5000);
}

bootstrap();
