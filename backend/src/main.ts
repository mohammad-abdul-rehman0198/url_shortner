import session from 'express-session';
import MongoStore from 'connect-mongo';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from '@/src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true, 
    },
  });

  (app as any).set('trust proxy', 1);

  app.use(
    session({
      name: 'url.sid',
      secret: process.env.SESSION_SECRET || 'supersecret',
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        collectionName: 'sessions',
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'none',
      },
    }),
  );

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
