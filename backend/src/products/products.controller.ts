import { Controller, Get, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<product[]> {
    return this.productsService.findAll();
  }

  @Put()
  update(product: product): Promise<product> {
    return this.productsService.update(product);
  }
}
