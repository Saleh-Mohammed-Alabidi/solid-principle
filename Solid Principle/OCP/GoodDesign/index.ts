/***
 * client side 
 */

import { Manager } from './class/Manager'
import { Regular } from './class/Regular'


// manager emplayee
const manager = new Manager();
manager.id = 1;
manager.name = "Saleh";
manager.basicSalary = 6000;

console.log(`Salary for Manager ${manager.name} is : `, manager.calcHoursBouns(20));

// regular employee
const regular = new Regular();
regular.id = 10;
regular.name = "Tom";
regular.basicSalary = 980;

console.log(`Salary for regular emplayee ${regular.name} is : `, regular.calcHoursBouns(7));



