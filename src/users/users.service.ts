import { Injectable } from '@nestjs/common';
import { IUser } from 'src/types/user';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    { name: 'elad', age: 18, id: 1 },
    { name: 'ohad', age: 68, id: 2 },
  ];
  getAllUsers() {
    return this.users;
  }

  addUser(user: IUser) {
    this.users.push({ ...user, id: this.users[this.users.length - 1].id + 1 });
    return 'sucseefully added ' + user.name;
  }
}
