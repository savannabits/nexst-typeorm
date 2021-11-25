import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { createServer } from 'http';
import next, { NextServer } from 'next/dist/server/next';

@Injectable()
export class AppService implements OnModuleInit {
  private server: NextServer;
  constructor(private configService: ConfigService) { }
  async onModuleInit(): Promise<void> {
    try {
      const dev = this.configService.get<string>('NODE_ENV') !== 'production'
      this.server = next({ dev, dir: './client' })
      await this.server.prepare();
      createServer()
    } catch (error) {
      console.log(error);
    }
  }
  handler(req: Request, res: Response) {
    return this.server.getRequestHandler()(req, res);
  }
}
