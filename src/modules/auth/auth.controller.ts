import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthenticationController {
  constructor() {}
  @Post('signup')
  signup(@Body() Body: any) {
    console.log(Body);

    return 'signup';
  }

  @Get('login')
  login() {
    return 'login';
  }
}
