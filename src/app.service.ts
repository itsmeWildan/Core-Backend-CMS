// untuk basic service, tempat untuk menyimpan atau mengatur bisnis logic
// yang akan di eksekusi di file app.controller.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Semangat Wildan Aril';
  }
}
