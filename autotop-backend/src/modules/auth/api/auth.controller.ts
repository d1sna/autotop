import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'src/app/errors/not-found.error';
import { UserService } from 'src/modules/user/services/users.service';
import { AuthService } from '../services/auth.service';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sing-in.dto';
import { SignUpDto } from './dto/sing-up.dto';
import { JwtAuthGuard } from 'src/app/guards/jwt-auth.guard';
import { TokenService } from '../services/token.service';
import { Request } from 'express';
import { IdentifyResponseDto } from './dto/identify-response.dto';

interface ITokenPayload {
  userId: string;
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  @Post('/sign-in')
  @HttpCode(200)
  async signIn(@Body() credentials: SignInDto): Promise<SignInResponseDto> {
    try {
      return new SignInResponseDto(
        await this.authService.loginUser(credentials),
      );
    } catch (error) {
      if (error instanceof NotFoundError) throw new BadRequestException();
      throw error;
    }
  }

  @Post('/sign-up')
  @HttpCode(201)
  async signUp(@Body() registrationParams: SignUpDto) {
    return this.userService.createNewUser(registrationParams);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/identify')
  @HttpCode(200)
  async identify(@Req() req: Request) {
    const tokenPayload = this.tokenService.decodeToken(
      req?.headers?.authorization.split(' ')[1],
    ) as ITokenPayload;
    if (!tokenPayload) throw new ForbiddenException();
    return new IdentifyResponseDto(
      await this.userService.getUserById(tokenPayload.userId),
    );
  }
}
