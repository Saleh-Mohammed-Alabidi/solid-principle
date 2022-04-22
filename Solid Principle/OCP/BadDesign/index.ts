/***
 * client side use Employee class
 */

 import {Employee} from './Employee'

 const employee=new Employee();

 // manager emplayee

       employee.id=1;
       employee.name="Saleh";
       employee.basicSalary=6000;
       employee.empType="manager"

    console.log(`Salary for employee ${employee.name} is : `,employee.calcHoursBouns(20));

 // regular employee

     employee.id=10;
     employee.name="Tom";
     employee.basicSalary=980;
     employee.empType="regular"

 console.log(`Salary for employee ${employee.name} is : `,employee.calcHoursBouns(7));

     

