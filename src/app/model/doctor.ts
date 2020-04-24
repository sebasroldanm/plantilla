import { DatePipe } from '@angular/common';
import { Address } from './address';
import { Specialty } from './specialties';

export class Doctor {
  id: number;
  name: string;
  lastName: string;
  dateBirth: DatePipe;
  addres: Address;
  state: boolean;
  specialties: Specialty;
}
