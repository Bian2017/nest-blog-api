import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto { // Dto 是Data Transfer Object(数据传输对象)的简写
  @ApiProperty({ description: '帖子标题', example: '帖子标题'})
  @IsNotEmpty({message: '请填写标题'}) // 检查值是否不为空。添加message，表示出错的时候提示什么错误
  title: string

  @ApiProperty({ description: '帖子内容', example: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(@InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>) {} // private readonly 表示这属性是私有的

  @Get()
  @ApiOperation({ summary: '显示帖子列表'})
  async index() {
    return await this.postModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建帖子'})
  async create(@Body() createPostDto: CreatePostDto) { //创建帖子：通过参数装饰器告诉nest要取什么数据
    await this.postModel.create(createPostDto)

    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情'})
  async detail(@Param('id') id: string) { // 通过装饰器取出id，并将其赋值给变量id
    return await this.postModel.findById(id)
  }

  @Put(':id') //表示修改某个资源
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    await this.postModel.findByIdAndUpdate(id, updatePostDto)

    return {
      success: true
    }
  }

  @Delete(':id') 
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.postModel.findByIdAndDelete(id)

    return {
      success: true
    }
  }
}
