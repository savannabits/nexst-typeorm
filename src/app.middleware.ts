import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {}
  async use(req: Request, res: Response, next: () => void) {
    // Terminate here and return to next to render views
    await this.appService.handler(req,res)
    return res.send();
  }
}
