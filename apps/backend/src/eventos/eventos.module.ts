import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';
import { EventoPrismaFlat } from './evento.prisma--flat/evento.prisma--flat';

@Module({
  imports: [DbModule],
  controllers: [EventosController],
  providers: [EventoPrisma, EventoPrismaFlat],
})
export class EventosModule {}
