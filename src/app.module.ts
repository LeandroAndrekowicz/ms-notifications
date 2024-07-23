import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { featureModules } from './modules';
import { globalModules } from './modules/global';

@Module({
  imports: [ConfigModule.forRoot(), ...featureModules, ...globalModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
