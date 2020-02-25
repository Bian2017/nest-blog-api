import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

class CreatePostDto { // Dto 是Data Transfer Object(数据传输对象)的简写
  @ApiProperty({ description: '帖子标题', example: '帖子标题'})
  title: string

  @ApiProperty({ description: '帖子内容', example: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示帖子列表'})
  async index() {
    return await PostModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建帖子'})
  async create(@Body() createPostDto: CreatePostDto) { //创建帖子：通过参数装饰器告诉nest要取什么数据
    await PostModel.create(createPostDto)

    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情'})
  async detail(@Param('id') id: string) { // 通过装饰器取出id，并将其赋值给变量id
    return await PostModel.findById(id)
  }

  @Put(':id') //表示修改某个资源
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    await PostModel.findByIdAndUpdate(id, updatePostDto)

    return {
      success: true
    }
  }

  @Delete(':id') 
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id)

    return {
      success: true
    }
  }
}
