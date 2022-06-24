import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './entitys/cliente.entity';

@Injectable()
export class ClienteService {
   
    constructor(
       @InjectRepository(Clientes)
       private clientes: Repository<Clientes>
    ){}
    
    async findAll(): Promise<Clientes[]>{
        return this.clientes.find() 
    }

    async findOne( id: string ): Promise<Clientes>{
        return this.clientes.findOne({where: {id:id}})
    }

    async createClient(cli: Clientes): Promise<Clientes>{
        return this.clientes.save(cli)
    }

    async updateClient(id: string, cli: Clientes): Promise<any>{
        try {
            return await this.clientes.update(id, cli);
        } catch (e) {
            return { message: e.message}
        }
    }

    async delete(id: string): Promise<any> {
        this.clientes.delete(id);
    }

}
