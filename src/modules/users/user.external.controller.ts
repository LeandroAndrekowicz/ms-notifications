import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller()
export default class UsersExternalController {
    constructor (
        private readonly userService : UserService
    ) {}

    @MessagePattern('users-user-created')
    async createUser(data : {id: string, name: string, email : string}) {
        return await this.userService.create(data);
    }
}