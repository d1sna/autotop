import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from 'src/app/config/config.module';
import { JwtStrategy } from 'src/app/strategies/jwt.strategy';
import { UsersModule } from '../user/user.module';
import { AuthController } from './api/auth.controller';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { JwtAuthGuard } from 'src/app/guards/jwt-auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secret_test',
      signOptions: { expiresIn: '5m' },
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService, JwtAuthGuard],
})
export class AuthModule {}
