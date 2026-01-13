import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  @IsNotEmpty()
  original: string;

  @IsString()
  @IsNotEmpty()
  short: string;

  sessionId: string;
}