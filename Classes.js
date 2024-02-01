"use strict";
class EmployeeInformation {
}
class EmpConstructor {
    constructor(id, naam, pata, kaam) {
        this.id = id;
        this.name = naam;
        this.address = pata;
        this.Designation = kaam;
    }
    getNameAndAdress() {
        return `${this.name} stays in ${this.address}`;
    }
}
let empInfo = new EmployeeInformation();
empInfo.Designation = "SDE";
let Jhon = new EmployeeInformation();
Jhon.id = 1;
Jhon.name = 'Jhon';
Jhon.address = 'Route 66';
console.log(Jhon);
let Ram = new EmpConstructor(1, 'Ram', 'Bandra', 'Driver');
console.log(Ram);
console.log(Ram.getNameAndAdress());
