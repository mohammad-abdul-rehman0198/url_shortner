import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UrlService } from '@/src/modules/url/url.service';
import { Url, UrlSchema } from '@/src/database/models/url.model';
import { UrlController } from '@/src/modules/url/url.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
