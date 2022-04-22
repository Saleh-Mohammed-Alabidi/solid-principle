/**
 * Bad Design: a class Employee
 */

export class Employee {
  public id: number = 0;
  public name: string = "";
  public basicSalary: number = 0;
  public empType: string = "";

  calcHoursBouns(hours: number): number {

    // here some calculate hours bouns
    if (this.empType == "manager")
      return (((this.basicSalary / 30) / 8) * hours) * 2;
    else
      return ((this.basicSalary / 30) / 8) * hours;
  }
}