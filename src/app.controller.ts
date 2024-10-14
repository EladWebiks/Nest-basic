import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Post("elad")
  getHello(@Body() body :any): string {
    console.log("this is body: ",body);
    
    return this.appService.getHello();
  }
}
