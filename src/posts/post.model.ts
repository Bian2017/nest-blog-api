import { prop } from '@typegoose/typegoose'

// 借助于nestjs-typegoose库，只需要写结构，不需要写Model
export class Post {
  @prop() // @prop装饰器：表示将title属性定义成mongoose的一个字段
  title: string

  @prop()
  content: string
}

