import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('getLocation')
  checkForUpdate(): string {
    return this.appService.getLast();
  }

  @Get('getLock')
  getLock(){
    return this.appService.getLockState();
  }
  

  @Get('lock')
  lock(){
    this.appService.lock();

  }

  @Get('unlock')
  unlock(){
    this.appService.unlock();
    
  }
  @Post('sendLoc')
  saveLocation(@Body() b  ){
    console.log("Did receive Loc:")
    console.log(b);
    this.appService.addLocation(b);
  }
}
