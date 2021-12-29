import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TYPEORM_MAIN, NODE_ENV } from '@environments';
import { CacheService } from './config';

import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { SesModule } from './ses/ses.module';
import { Se } from './ses/entities/se.entity';
import { ChairsModule } from './chairs/chairs.module';
import { Chair } from './chairs/entities/chair.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CacheModule.registerAsync({
      useClass: CacheService,
    }),
    TypeOrmModule.forRoot({
      ...TYPEORM_MAIN,
      synchronize: NODE_ENV === 'production' ? false : true,
      entities: [User, Se, Chair],
    }),

    UsersModule,
    AuthModule,
    SesModule,
    ChairsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
