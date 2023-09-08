import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { product } from './product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [SequelizeModule.forFeature([product])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductModule {}
