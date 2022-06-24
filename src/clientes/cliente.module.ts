import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './entitys/cliente.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Clientes])],
  providers: [ClienteService],
  controllers: [ClienteController]
})
export class ClienteModule {}
