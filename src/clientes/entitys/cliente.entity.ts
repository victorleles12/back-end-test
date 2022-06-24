import { Pedidos } from "../../pedidos/entitys/pedido.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Clientes {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    cep: string;

    @OneToMany(() => Pedidos, (pedido) => pedido.cliente)
    pedido: Pedidos

}