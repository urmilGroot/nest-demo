import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [
      {
        id: 1,
        name: 'Laptop',
        price: 1000,
        category: 'Electronics',
      },
      {
        id: 2,
        name: 'Phone',
        price: 500,
        category: 'Electronics',
      },
      {
        id: 3,
        name: 'Shoes',
        price: 100,
        category: 'Fashion',
      },
    ];
  }
}
