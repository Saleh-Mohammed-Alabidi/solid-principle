export interface IEmployee {
    id: number;
    name: string
    basicSalary: number
    calcHoursBouns(hours: number): number
}