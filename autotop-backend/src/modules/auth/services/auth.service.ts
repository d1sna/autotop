import { Injectable, Logger } from '@nestjs/common';
import { NotFoundError } from 'src/app/errors/not-found.error';
import { UserService } from 'src/modules/user/services/users.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  private readonly logger: Logger;
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {
    this.logger = new Logger(AuthService.name);
  }

  async loginUser(loginParams) {
    const user = await this.userService.getUserByEmail(loginParams.email);
    if (!user || !user.comparePasswordWithHash(loginParams.password))
      throw new NotFoundError('Wrong login params');
    const token = this.tokenService.getTokenForUser(user);
    return { user, token };
  }

  async validateUser(params) {
    const user = await this.userService.getUserById(params.userId);
    return user;
  }
}
