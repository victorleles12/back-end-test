import { Itens } from "src/itens/entitys/itens.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedidos } from "./pedido.entity";

@Entity()
export class PedidosItens {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Pedidos, (pedidos) => pedidos.pedidositens)
    pedido: Pedidos
 
    @ManyToOne(() => Itens, (itens) => itens.pedidoitens)
    itens: Itens
}