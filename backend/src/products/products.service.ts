import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(product)
    private productModel: typeof product,
  ) {}

  async findAll(): Promise<product[]> {
    return this.productModel.findAll();
  }

  findOne(code: number): Promise<product> {
    return this.productModel.findOne({
      where: {
        code,
      },
    });
  }

  async update(product: product): Promise<product> {
    this.productModel.update(product, {
      where: {
        code: product.code,
      },
    });
    return this.findOne(product.code);
  }

  async remove(code: number): Promise<void> {
    const product = await this.findOne(code);
    await product.destroy();
  }
}
