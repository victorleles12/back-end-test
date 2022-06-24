import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itens } from './entitys/itens.entity';
import { ItensController } from './itens.controller';
import { ItensService } from './itens.service';

@Module({
  imports: [TypeOrmModule.forFeature([Itens])],
  controllers: [ItensController],
  providers: [ItensService]
})
export class ItensModule {}
