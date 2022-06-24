import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PedidoitemService } from 'src/pedidoitem/pedidoitem.service';
import { Pedidos } from './entitys/pedido.entity';
import { PedidosItens } from './entitys/pedidos.itens.entity';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
    constructor(
        private pedidoService: PedidosService,
        private pedidoItemService: PedidoitemService
    ){ }
    
    //#region Para pedidos
    @Get()
    async getPedidos(): Promise<Pedidos[]>{
        return this.pedidoService.getPedidos()
    } 

    @Get(':id')
    async getOnePedido(@Param('id') id: string): Promise<Pedidos>{
        return this.pedidoService.getOnePedido(id)
    }

    @Post()
    async createPedidos(@Body() body: Pedidos): Promise<{}> {
        return this.pedidoService.createPedido(body)
    }

    @Put(':id')
    async updatePedido(@Param('id') id: string, @Body() body: Pedidos): Promise<any>{
        return this.pedidoService.updatePedido(id, body)
    }

    @Delete(':id')
    async deletePedido(@Param('id') id: string): Promise<any>{
        return this.pedidoService.deletePedido(id)
    }
    //#endregion

    //#region - Para itens dos pedidos
    @Post('/item')
    async createPedidoItem(@Body() body: PedidosItens): Promise<PedidosItens>{
        return this.pedidoItemService.createPedidoItem(body)
    }
    //#endregion
}
