
import { IEmployee } from '../builder/IEmployee';

export class Manager implements IEmployee {
    id: number=0;
    name: string="";
    basicSalary: number=0;

    calcHoursBouns(hours: number): number {
        return (((this.basicSalary / 30) / 8) * hours) * 2;
    }

}