import { Controller, Get, Put } from '@nestjs/common';
import { PacksService } from './packs.service';
import { pack } from './pack.model';

@Controller('packs')
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  @Get()
  getAll(): Promise<pack[]> {
    return this.packsService.findAll();
  }

  @Put()
  update(pack: pack): Promise<pack> {
    return this.packsService.update(pack);
  }
}
