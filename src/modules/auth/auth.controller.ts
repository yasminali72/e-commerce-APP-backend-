import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthenticationController {
  constructor() {}
  @Get('signup')
  signup() {
    return 'signup';
  }

  @Get('login')
  login() {
    return 'login';
  }
}
