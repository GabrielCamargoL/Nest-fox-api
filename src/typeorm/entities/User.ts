import { UserRoleEnum } from "src/enums/UserRoleEnum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: [UserRoleEnum.ADMIN, UserRoleEnum.COMMON],
    default: UserRoleEnum.COMMON
  })
  role: UserRoleEnum;

  @Column()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}