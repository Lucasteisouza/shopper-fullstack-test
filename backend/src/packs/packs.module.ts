import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { pack } from './pack.model';
import { PacksController } from './packs.controller';
import { PacksService } from './packs.service';

@Module({
  imports: [SequelizeModule.forFeature([pack])],
  providers: [PacksService],
  controllers: [PacksController],
})
export class PackModule {}
