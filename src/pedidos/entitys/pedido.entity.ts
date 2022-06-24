import { Clientes } from "../../clientes/entitys/cliente.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PedidosItens } from "./pedidos.itens.entity";

@Entity()
export class Pedidos {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 65, nullable: false })
    descricao: string
    
    @Column({ nullable: false })
    frete: number

    @Column({ nullable: false })
    valor: number

    @ManyToOne(() => Clientes, (cliente) => cliente.pedido)
    cliente: Clientes

    @OneToMany(() => PedidosItens, (pedidoitens) => pedidoitens.pedido)
    pedidositens: PedidosItens[]

}