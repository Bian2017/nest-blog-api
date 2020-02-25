import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto { // Dto 是Data Transfer Object(数据传输对象)的简写
  @ApiProperty({ description: '帖子标题'})
  title: string
  @ApiProperty({ description: '帖子内容'})
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表'})
  index() {
    return [
      {id: 1, title: '博客1'}
    ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子'})
  create(@Body() body: CreatePostDto) { //创建帖子：通过参数装饰器告诉nest要取什么数据
    return body
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title: 'bbbb'
    }
  }
}
