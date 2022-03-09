// Mid Term Assessment: Classes & Constructors 
// Assessment Duration: 45 Min
// Assessment Total: 100
// DV200: Assessment A

// Instructions: 
// Using Classes and the basic principles of OOP, refactor the below procedural code into Object Oriented Code. 

// PART ONE: Super Class 
// 1. Using the information provided below, convert the following variables and functions into a class template called USER. 

// var first = "Bob"; 
// var last = "Oppenheimer";
// var username = "CastleBravo"; 
// var email = "atom@breakers.com"
// var sci_id = "";
// var dutyStatus = false; 

class User{
    constructor(){
        this.first = "Bob";
        this.last = "Oppenheimer";
        this.username = "CastleBravo";
        this.email = "atom@breakers.com";
        this.dutyStatus = false;
        this.sci_id = 201;

        // 2. Using the principle of Abstraction, ensure the setSystemId method and sci_id property, are set private
        // 3. The setSciId method must run automatically when the constructor function is invoked.

        let setSystemId = function(){
            sys_id = Math.round(Math.random(this.sci_id) * 100000);
            console.log(first + " " + last + " has been assigned system id: " + sys_id)
        }

        this.newSysId = function(){
            console.logconsole.log(first + " " + last + " has been assigned system id: " + sys_id);
            setSystemId();
        }

    } 

}

class ScienceHeads extends User{
    constructor(first, last, department, sector){
        super();
        this.first = first;
        this.last = last;
        this.department = department;
        this.sector = sector;
    }

    updateSector(public){
        const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
        let value = Math.round(Math.random() * 4);
        this.sector = sectors[value];
        alert(this.first + " " + this.last + " has been assigned to " + this.sector);
    }

    public();
}

// 4. Create a New Class that inherits from your Super class, call this new sub-class 'ScienceHeads'


//PART TWO: Class Inheritance 
// 5. The constructor method must include 4 Parameters, 'first', 'last', 'department' and 'sector'
// 6. Dont forget to use the super(); function in gain access to the super class properties.  
// 7. Take a look at SNIPPET ONE, include the Method in the sub-class as a public method.

//PART THREE: Final Instance  
// 8. Create a New Class that inherits from your ScienceHeads class, call this new sub-class 'Intern'
// 9. The constructor must take three parameters, 'first', 'last' and 'securityClearance'
// 10. Ensure you are inherting 'first' & 'last' and assigning 'securityClearance' to the Intern Class
// 10. Take a look at SNIPPET TWO, include the Method in the sub-class as a public method.

//PART FOUR: Invoking Constructors 

// 11. Assign a let variable called userEx and create a new instance of the USER class.
// 12. Assign a let variable called divHead and create a new instance of the DivisionHead class.
// 13. Assign a let variable called internOne and create a new instance of the Intern class.
// 14. Invoke the assignHead Method from internOne

// function setSciId(){
//     sys_id = Math.round(Math.random() * 100000);
//     alert(first + " " + last + " has been assigned system id: " + sys_id);
// }

function onDuty(){
    if(!dutyStatus){
        dutyStatus = true;
        message = "On"
        alert( first + " " + last + " is now " + message + " duty...");
    } else {
        dutyStatus = false;
        message = "Off"
        alert( first + " " + last + " is now " + message + " duty...");
    }
}

// SNIPPET ONE: class ScienceHeads public method: 

// updateSector(){
//     const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = sectors[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }

// SNIPPET TWO: class Intern public method: 
// assignHead(){
//     const divHeads = ['','Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = divHeads[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }
