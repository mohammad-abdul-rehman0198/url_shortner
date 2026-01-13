import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UrlDocument = Url & Document;

@Schema({
  collection: 'urls',
})
export class Url {
  @Prop({ required: true })
  original: string;

  @Prop({ required: true, unique: true })
  short: string;

  @Prop({ required: true})
  sessionId: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
