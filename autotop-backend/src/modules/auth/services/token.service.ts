import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/modules/user/models/user.model';
import { ConfigService } from 'src/app/config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  getTokenForUser(user: UserModel) {
    const { id: userId, fullName, email } = user;
    return this.jwtService.sign(
      { userId, fullName, email },
      { secret: this.configService.get('SECRET_KEY') },
    );
  }

  decodeToken(token: string) {
    return this.jwtService.decode(token);
  }
}
