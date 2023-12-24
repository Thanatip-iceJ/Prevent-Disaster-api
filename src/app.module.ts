import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisasterModule } from './disaster/disaster.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Data } from './disaster/entities/disaster.entity';
import { ObstacleType } from './obstacle-type/entities/obstacle-type.entity';
import { ObstacleTypeModule } from './obstacle-type/obstacle-type.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [Data, ObstacleType],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    DisasterModule,
    ObstacleTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
