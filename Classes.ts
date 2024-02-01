class EmployeeInformation {
    private id !: number;
    name !: string;
    address !: string;
    Designation !: string;
}

class EmpConstructor {
    //private field - # is preffered
    #id: number;
    //public field
    name: string;
    address: string;
    Designation: string;



    constructor(id: number, naam: string, pata: string, kaam: string) {
        this.#id = id;
        this.name = naam;
        this.address = pata;
        this.Designation = kaam;
    }

    getNameAndAdress(): string {
        return `${this.name} stays in ${this.address}.`;
    }
}

let empInfo = new EmployeeInformation();
empInfo.Designation = "SDE";

let Jhon = new EmployeeInformation();
//Jhon.id=1; Will Cause an error can't access private fields.
Jhon.name = 'Jhon';
Jhon.address = 'Route 66';

console.log(Jhon);

let Ram = new EmpConstructor(1, 'Ram', 'Bandra', 'Driver');

console.log(Ram);
console.log(Ram.getNameAndAdress());