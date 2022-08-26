import { UserRoleEnum } from "src/enums/UserRoleEnum";

export type CreateUserParams = {
  username: string;
  email: string;
  role: UserRoleEnum
}