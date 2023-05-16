export const EmployeeApi = {
    employee :[
        {id:123,name:"Naresh",desig:"Web developer",mobile:9123789012},
        {id:124,name:"Rajesh",desig:"UI developer",mobile:9123789012},
        {id:125,name:"Sirisha",desig:"Java developer",mobile:9123789012},
        {id:126,name:"Gopal",desig:"Backend developer",mobile:9123789012},
        {id:127,name:"Ganesh",desig:"SAP developer",mobile:9123789012},
        {id:128,name:"Manoj",desig:"FrontEnd developer",mobile:9123789012},
        {id:129,name:"Raghu",desig:"QA developer",mobile:9123789012}
    ],
    all:function(){
       return this.employee
    },
    getById: function(id){
    const self =emp=>emp.id == id;
    return this.employee.find(self)
    }
}