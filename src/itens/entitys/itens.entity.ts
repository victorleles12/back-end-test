import { PedidosItens } from "src/pedidos/entitys/pedidos.itens.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Itens {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length:15, nullable: false })
    sku: string

    @Column({ length:65,  nullable: false })
    descricao: string

    @Column('numeric', {precision: 12, scale: 2, nullable: false })
    valor: Number

    @Column({ nullable: false })
    quantidade: Number

    @OneToMany(() => PedidosItens, (pedidositens) => pedidositens.itens)
    pedidoitens: PedidosItens
}