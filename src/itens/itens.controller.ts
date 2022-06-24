import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Itens } from './entitys/itens.entity';
import { ItensService } from './itens.service';

@Controller('itens')
export class ItensController {
    constructor(private itensService: ItensService){}
    
    @Get()
    async findAllItens(): Promise<Itens[]>{
        return this.itensService.findAllItens()
    }
        
    @Get(':id')
    async findOneIten(@Param('id')id: string): Promise<Itens>{
        return this.itensService.findOneIten(id)
    }

    @Post()
    async createItens(@Body() body: Itens): Promise<Itens>{
        return this.itensService.createIten(body)
    }

    @Put(':id')
    async updateItem(@Param('id') id: string, @Body() body:Itens): Promise<any>{
        return this.itensService.updateItens(id, body)
    }

    @Delete(':id')
    async deleteItens(@Param('id') id: string): Promise<any>{
        return this.itensService.deleteItens(id)
    }
}
