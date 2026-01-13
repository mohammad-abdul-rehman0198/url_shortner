import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Model } from 'mongoose';
import { CreateUrlDto } from '@/src/modules/url/dto/createUrl.dto';
import { Url, UrlDocument } from '@/src/database/models/url.model';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async getUrlList(sessionId: string) {
    const urls = await this.urlModel.find({ sessionId }).sort({ createdAt: -1 });

    return {
      success: true,
      message: 'URLs fetched successfully',
      urls: urls.map((url) => ({
        original: url.original,
        short: url.short,
      })),
    };
  }

  async createUrl(createUrlDto: CreateUrlDto) {
    const newUrl = new this.urlModel(createUrlDto);
    await newUrl.save();
    return {
      success: true,
      message: 'URL created successfully',
      url: newUrl,
    };
  }

  async getUrl(short: string) {
    const url = await this.urlModel.findOne({ short });
    if (!url) {
      throw new NotFoundException('URL not found');
    }

    return {
      success: true,
      original: url.original,
    };
  }
}
