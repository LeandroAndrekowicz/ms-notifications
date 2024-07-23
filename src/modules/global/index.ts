import { PrismaModule } from "./prisma/prisma.module";
import { PubSubExternalModule } from "./pubsub/pubsub.module";

export const globalModules = [PrismaModule, PubSubExternalModule]