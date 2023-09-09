import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { pack } from './pack.model';

@Injectable()
export class PacksService {
  constructor(
    @InjectModel(pack)
    private packModel: typeof pack,
  ) {}

  async findAll(): Promise<pack[]> {
    return this.packModel.findAll();
  }

  async findOne(id: number): Promise<pack> {
    return this.packModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByProductId(productId: number): Promise<pack[]> {
    return this.packModel.findAll({
      where: {
        product_id: productId,
      },
    });
  }

  async update(pack: pack): Promise<pack> {
    this.packModel.update(pack, {
      where: {
        id: pack.id,
      },
    });
    return this.findOne(pack.id);
  }

  async remove(id: number): Promise<void> {
    const pack = await this.findOne(id);
    await pack.destroy();
  }
}
