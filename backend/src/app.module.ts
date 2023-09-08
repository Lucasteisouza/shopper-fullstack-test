import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './products/products.module';
import { product } from './products/product.model';
import { pack } from './packs/pack.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'mydb',
      models: [product, pack],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
