import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itens } from './entitys/itens.entity';

@Injectable()
export class ItensService {
    constructor(
        @InjectRepository(Itens)
        private itens: Repository<Itens>
     ){}

    async findAllItens(): Promise<Itens[]>{
        return this.itens.find()
    }
    
    async findOneIten(id: string): Promise<Itens>{
        return this.itens.findOne({
            where: {
                id: id
            }
        })
    }

    async createIten(itens: Itens): Promise<Itens>{
        return this.itens.save(itens)
    }

    async updateItens(id: string, itens: Itens): Promise<any>{
        return this.itens.update(id, itens)
    }

    async deleteItens(id: string): Promise<any>{
        return this.itens.delete(id)
    }
}  
