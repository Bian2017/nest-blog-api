import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as mongoose from 'mongoose'

async function bootstrap() {
  mongoose.connect('mongodb://Li:123456@dev.toimc.com:42017/nest-blog-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  const app = await NestFactory.create(AppModule);

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
