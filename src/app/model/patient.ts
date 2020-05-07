import { Consult } from './consult';
import { DatePipe } from '@angular/common';
import { Address } from './address';

export class Patient {
  id: number;
  name: string;
  lastName: string;
  addres: Address;
  dateBirth: DatePipe;
  mail: string;
  // consults: Consult;
}
