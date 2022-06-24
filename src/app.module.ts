import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './clientes/cliente.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ItensModule } from './itens/itens.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/envs/.env.${process.env.NODE_ENV}`,
      load:[configuration],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
    }),
    ClienteModule, 
    PedidosModule, 
    ItensModule,
  ]
})

export class AppModule {}
