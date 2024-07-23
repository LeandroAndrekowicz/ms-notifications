import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import UsersExternalController from "./user.external.controller";
import { UserRepository } from "./repositories/user.repository";

@Module({
    imports: [],
    providers: [UserService, UserRepository],
    controllers: [UsersExternalController]
})
export class UsersModule{}