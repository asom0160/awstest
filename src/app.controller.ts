import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("test")
  getTest(): Object {
    return { data: '테스트임둥', message: '테스트' }
  }
  @Get("siuu")
  getSiuuu(): Object {
    return { data: 'Siuuu', message: 'Siuuu' }
  }
}
