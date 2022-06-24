import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from './entitys/pedido.entity';
import { PedidosItens } from './entitys/pedidos.itens.entity';
import { PedidoitemService } from 'src/pedidoitem/pedidoitem.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Pedidos, 
      PedidosItens
    ])
  ],
  providers: [
    PedidosService, 
    PedidoitemService
  ],
  controllers: [PedidosController]
})
export class PedidosModule {}
