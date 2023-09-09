import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param() params: any): Promise<product> {
    return this.productsService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params: any, @Body() product: product): Promise<product> {
    return this.productsService.update(params.id, product);
  }
}
