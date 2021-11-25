import { Controller, Get, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Redirect('/docs')
  async home(@Req() req: Request, @Res() res: Response) {
  }
  @Get('docs*')
  async frontend(@Req() req: Request, @Res() res: Response) {
    await this.appService.handler(req,res);
  }
  @Get('_next*')
  async assets(@Req() req: Request, @Res() res: Response) {
    await this.appService.handler(req,res);
  }
  
}
