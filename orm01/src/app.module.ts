import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:bhdgFbZwmOwNniIjuGgdDGvtLNuzXQph@viaduct.proxy.rlwy.ne',
      synchronize: true,
      logging: false,
      entities: ["dist/**/*.entity.js"]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
