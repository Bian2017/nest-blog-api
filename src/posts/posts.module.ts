import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model';

/**
 * @Module() 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。
 * + providers	由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享
 * + controllers	必须创建的一组控制器
 * + imports	导入模块的列表，这些模块导出了此模块中所需提供者
 * + exports	由本模块提供并应在其他模块中可用的提供者的子集。
 */
@Module({
  imports: [
    // 导入要使用的模型
    TypegooseModule.forFeature([Post]) // forFeature方法会自动注册Post模型。
  ],
  controllers: [PostsController]
})
export class PostsModule {}
