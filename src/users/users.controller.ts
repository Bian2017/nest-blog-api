import { Controller } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { IsNotEmpty } from 'class-validator'
import { User } from './user.model'
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Crud } from 'nestjs-mongoose-crud' // 针对mongoose实现通用的crud操作

class CreateUserDto { // Dto 是Data Transfer Object(数据传输对象)的简写
  @ApiProperty({ description: '用户昵称', example: '哈哈'})
  @IsNotEmpty({ message: '用户昵称不能为空'}) // 添加校验，即属性title值不能为空。message表示出错的时候提示什么错误
  name: string

  @ApiProperty({ description: '用户年龄', example: 22 })
  age: number
}

// 装饰器Crud会自动添加五个路由
@Crud({
  model: User, // 必须指定主要的模型
  routes: {
    find: {
      decorators: [  // 装饰器
        ApiOperation({summary: '用户列表'})  // 不能加'@'
      ]
    },
    create: {
      decorators: [
        ApiOperation({summary: '创建用户'})
      ],
      dto: CreateUserDto  // 可以通过dto传递类型
    },
    findOne: {
      decorators: [
        ApiOperation({summary: '用户详情'})
      ]
    },
  }
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  // 使用了装饰器Crud，属性必须定义成model
  constructor(@InjectModel(User) private readonly model: ModelType<User>) { }
}
