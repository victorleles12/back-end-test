import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Clientes } from './entitys/cliente.entity';

@Controller('clientes')
export class ClienteController {
    constructor(private clientesService: ClienteService){}
    
    @Get()
    async findAll(): Promise<Clientes[]>{
        return this.clientesService.findAll()
    } 

    @Get(':id')
    async findOne(@Param('id') id: string ): Promise<Clientes>{
        return this.clientesService.findOne(id)
    }

    @Post()
    async createClient(@Body() body: Clientes): Promise<Clientes>{
        return this.clientesService.createClient(body)
    }

    @Put(':id')
    async updateClient(@Param('id')id: string, @Body() body: Clientes): Promise<any>{
        return  this.clientesService.updateClient(id,body)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        this.clientesService.delete(id)
    }
}
