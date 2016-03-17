// TODO: record employees and their salary.
// TODO: add the salaries up so we know how much we’re spending each month.
// TODO: first have an input form that collects: The Employee's First and Last name The Employee's ID Number The Employee's Job Title The Employee's Salary (Yearly)
// TODO: The form should have a submit button that clears out the form and your logic should store that information. Then, that information should be appended to the DOM so the user of the appliemployeeion can see the information they just entered.
// TODO: Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.
var EmployeeCounter = 0;
var employeeArray = [];
var employeeMonthlySalary = 0;
var combinedMonthlySalary = 0;
$(document).ready(function(){
      $("#employeeForm").on("submit", function(event){
      event.preventDefault();

      var values = {};

      //This strips the form and creates an object with the info in it
      $.each($("#employeeForm").serializeArray(), function(i, field){//these names can be anything just the order matters
        values[field.name] = field.value; //these name/value names are important to keep
      });

      //this clears out the form
      $("#employeeForm").find("input[type=text]").val("");

      employeeArray.push(values);

      console.log(employeeArray);

      totalEmployeeSalary();

      //-------------------LOOPING TO DISPLAY EMPLOYEE INFO TO THE DOM-------------

      for(EmployeeCounter; EmployeeCounter < employeeArray.length; EmployeeCounter++){ //we use this to put elements to the DOM
      $('.employeeinfo').append('<div></div>'); //create a div to make sure each person has their own container

      var $el = $('.employeeinfo').children().last(); //children are the <div> created by append
      //setting el to the target people container and all children it has.
      //.last is saying grab the last child
      //$ here just is a note to me so I know el is used in jQuery
      var employee = employeeArray[EmployeeCounter];

      $el.append('<p>' + employee.name + '</p>');//this adds content to each div
      $el.append('<p>' + employee.salary + '</p>');//this adds content to each div
      $el.append('<p>' + employee.id + '</p>');//this adds content to each div
      $el.append('<p>' + employee.title + '</p>');//this adds content to each div

    }
    });
});

function totalEmployeeSalary(){
  var employeeSalary = 0;
    var employee = employeeArray[EmployeeCounter];
    console.log('employee.salary' ,employee.salary);
    employeeSalary = parseInt(employee.salary);
    console.log('parseInt employeeSalary',employeeSalary);
     employeeMonthlySalary += (employeeSalary/12).toFixed(2);
     console.log('employeeMonthlySalary after toFixed' ,employeeMonthlySalary);
     employeeMonthlySalary = parseFloat(employeeMonthlySalary);
     console.log('employeeMonthlySalary after parseInt' ,employeeMonthlySalary);
     combinedMonthlySalary += employeeMonthlySalary;
  console.log('combinedMonthlySalary:',combinedMonthlySalary);
  $(".combined-monthly-salary").text("Combined monthly salary of employees: "+ combinedMonthlySalary.toFixed(2));

}//console.log(employeeMonthlySalary);
