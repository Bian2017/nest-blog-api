import { prop } from "@typegoose/typegoose";
import {  ApiProperty } from '@nestjs/swagger';

export class User {  // 此时User不光是模型，还是DTO
  @ApiProperty({ description: '用户昵称', example: '哈哈' })
  @prop()
  name: string

  @ApiProperty({ description: '用户年龄', example: 18})
  @prop()
  age: number
}