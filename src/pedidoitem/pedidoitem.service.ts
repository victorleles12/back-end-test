import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidosItens } from 'src/pedidos/entitys/pedidos.itens.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoitemService {
    constructor(
        @InjectRepository(PedidosItens)
        private pedidoItemService: Repository<PedidosItens>
    ){}
    
    async createPedidoItem(item: PedidosItens): Promise<PedidosItens>{
        return this.pedidoItemService.save(item)
    }
}
