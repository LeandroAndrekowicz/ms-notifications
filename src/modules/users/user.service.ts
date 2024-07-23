import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";

@Injectable()
export class UserService {
    constructor (
        private readonly userRepository : UserRepository
    ) {}
    
    async create (data : {id: string, name: string, email : string}) {
        return await this.userRepository.create(data);
    } 
}