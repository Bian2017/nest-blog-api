import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller() // 表示它是一个控制器
@ApiTags('默认') // 要将控制器附加到特定标签，请使用 @ApiTags(...tags) 装饰器。
export class AppController {
  constructor(private readonly appService: AppService) {} // 注入AppService类

  @Get() // 表示接下来的方法可以通过Get进行请求
  index(): string {
    return 'index';
  }

  @Get('/home') // 表示接下来的方法可以通过Get进行请求
  getHello(): string {
    return this.appService.getHello();
  }
}
