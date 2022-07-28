import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceiversService } from './receivers.service';
import { Receiver } from '@receiver-angular/api-interfaces';

@Controller('receivers')
export class ReceiversController {
  constructor(private readonly receiversService: ReceiversService) {}

  @Post()
  create(@Body() receiver: Receiver) {
    return this.receiversService.create(receiver);
  }

  @Get()
  findAll() {
    return this.receiversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiversService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() receiver: Receiver) {
    return this.receiversService.update(id, receiver);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiversService.remove(id);
  }
}
