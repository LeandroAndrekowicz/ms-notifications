import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/global/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor (
        private readonly prismaService : PrismaService
    ) {}

    async create(data: {id: string, name: string, email:string}) {
        const user = await this.prismaService.users.create({
            data: data
        })

        return user;
    }
}