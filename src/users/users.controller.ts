import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserPayload } from './payloads/create-user.payload';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @MessagePattern('create_user')
  async validateDocument(@Payload() payload: CreateUserPayload) {
    await this.usersService.createUserAsync(payload.accessCode, payload.hash);
  }
}
