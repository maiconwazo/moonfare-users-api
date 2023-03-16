import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUserAsync(accessCode: string, hash: string) {
    console.log(accessCode);
    console.log(hash);

    // create user
  }
}
