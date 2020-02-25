import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({ //表示它是一个模块
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService], // 跟依赖注入相关
})
export class AppModule {}
