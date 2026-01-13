import { Controller, Post, Body, Param, Get, NotFoundException, Res, Req } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UrlService } from '@/src/modules/url/url.service';
import { CreateUrlDto } from '@/src/modules/url/dto/createUrl.dto';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async createUrl(@Body() createUrlDto: CreateUrlDto, @Req() req: Request) {
    createUrlDto.sessionId = req.sessionID;
    return this.urlService.createUrl(createUrlDto);
  }

  @Get('all')
  async getAllUrls(@Req() req: Request) {
    const sessionId = req.sessionID;
    return this.urlService.getUrlList(sessionId);
  }

  @Get(':short')
  async getUrl(@Param('short') short: string, @Res() res: Response) {
    const url = await this.urlService.getUrl(short as string);

    if (!url) {
      throw new NotFoundException('URL not found');
    }

    return res.redirect(302, url.original);
  }
}
