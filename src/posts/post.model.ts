import { prop } from '@typegoose/typegoose'

export class Post {
  @prop() // @prop装饰器：表示将title属性定义成mongoose的一个字段
  title: string

  @prop()
  content: string
}

