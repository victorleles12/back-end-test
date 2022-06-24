import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedidos } from './entitys/pedido.entity';
import { PedidosItens } from './entitys/pedidos.itens.entity';

@Injectable()
export class PedidosService {
    constructor(
        @InjectRepository(Pedidos)
        private pedidos: Repository<Pedidos>,
        @InjectRepository(PedidosItens)
        private itemPedido: Repository<PedidosItens>
    ){ }

    async getPedidos(): Promise<Pedidos[]>{
        return this.pedidos.find({
            relations: {
                cliente: true,
                pedidositens: { itens: true }
            },

            select: {
                id: true,
                descricao: true,
                frete: true,
                valor: true,

                cliente: {
                    nome: true,
                    cpf: true,
                    cep: true,
                    email: true, 
                },
                pedidositens: {
                    id: true, 
                    itens: {
                        sku: true, 
                        descricao: true, 
                        valor: { }
                    }
                }
            }
        });        
    }

    async getOnePedido(id: string): Promise<Pedidos>{
        return this.pedidos.findOne({
            where: {
                id: id
            }
        })
    }

    async createPedido(pedido: Pedidos): Promise<Pedidos>{
        return this.pedidos.save(pedido)  
    }

    async updatePedido(id: string, pedido: Pedidos): Promise<any>{
        return this.pedidos.update(id, pedido)
    }

    async deletePedido(id: string): Promise<any>{
        return this.pedidos.delete(id)
    }

}
