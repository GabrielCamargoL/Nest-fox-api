import { UserRoleEnum } from "src/enums/UserRoleEnum"

export class CreateUserDto {
  username: string;
  email: string
  role: UserRoleEnum;
}