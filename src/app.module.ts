import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from 'nestjs-typegoose'

@Module({ //表示它是一个模块
  imports: [
    TypegooseModule.forRoot('mongodb://Li:123456@dev.toimc.com:42017/nest-blog-api', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService], // 跟依赖注入相关
})
export class AppModule {}
