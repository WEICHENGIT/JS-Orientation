//WEI CHEN
//email:weichen@whu.edu.cn

//question 3a
function Student (name,firstName,id)
{
  this.name=name;
  this.firstName=firstName;
  this.id=id;
}
var student = new Student("Dupond", "Jean", 1835);

//question 3b
student.print=function()
{
  console.log("student:" + student.name + "," + student.firstName+"," +student.id) ;
};
student.print();

//question 3c
//ForeignStudent constructor
function ForeignStudent(name,firstName,id,nationality) 
{
    Student.call(this, name,firstName,id);
    this.nationality = nationality ;
}

//void function F:
function F() {}

//point the F.prototype to Student.prototype:
F.prototype = Student.prototype;

//point ForeignStudent.prototype to a new object of F, 
//and the prototype of this object points to Student.prototype
ForeignStudent.prototype = new F();

//restore ForeignStudent.prototype.constructor
ForeignStudent.prototype.constructor = ForeignStudent;

var student2 = new ForeignStudent("Doe","John",432,"American");// creat a new object on derived class

//define a method on ForeignStudent.prototype
ForeignStudent.prototype.print = function () 
{
  console.log("foreign student:" + student2.name + "," + student2.firstName+"," +student2.id+","+student2.nationality);
};

student2.print();

//question 3d
var module1 = (function () 
{
  var student = 
	{
    createStudent: function (name, firstName, id) 
    {
      var student1 = new Student(name, firstName, id);
      return student1;
    },
    createForeignStudent: function (name, firstName, id, nationality) 
    {
      var student2 = new ForeignStudent(name, firstName, id, nationality);
      return student2;
    }
  };
  return student;
}
              )();
console.log(module1.createStudent("Francois","FF",1551));
console.log(module1.createStudent("Wei","WW",4300,"Cinese"));

//question 3e
var module2 = (function () 
{
  var promotion = 
      {
        student: [],
        add: function (name, firstName, id, nationality) 
        {
          if(typeof nationality == 'undefined')
            promotion.student.push(new Student(name, firstName, id));
          else
            promotion.student.push(new ForeignStudent(name, firstName, id, nationality));
          return promotion.student;
        },
        
        remove: function (id) 
        {
          for(var i = 0; i < promotion.student.length; i++) 
          {
            if(promotion.student[i].id == id)
              promotion.student.splice(i, 1);
          }
          return promotion.student;
        },
        
        list: function() 
        {
          for(var i = 0; i < promotion.student.length; i++) 
          {
            if(typeof promotion.student[i].nationality == 'undefined')
              console.log("student: " + promotion.student[i].name + ", " + promotion.student[i].FirstName + ", " + promotion.student[i].id);
            else
              console.log("student: " + promotion.student[i].name + ", " + promotion.student[i].FirstName + ", " + promotion.student[i].id + ", " + promotion.student[i].nationality);
          }
        },
        
        saveToFile: function () 
        {
??????????? var file = JSON.stringify(promotion);
??????????? return file;
??????? }
      };
  return promotion;
}
              )();

module2.add("Amy", "A", 1);
module2.add("Bob", "B", 2, "USA");
module2.add("Chris", "C", 3);
module2.add("David", "D", 4, "French");
module2.add("Elen", "E", 5);
module2.add("Francois", "F", 6, "French");
module2.add("Gina", "G", 7);
module2.add("Helen", "H", 8);
module2.add("Ivy", "I", 9);
module2.add("Jason", "J", 10, "USA");
module2.add("Kevin", "K", 11);
module2.add("Lora", "L", 12);
module2.add("Mandy", "M", 13, "French");
module2.add("Nora", "N", 14);
module2.add("Peter", "P", 15);
module2.add("Ray", "R", 15, "Chinese");
module2.add("Selina", "S", 17);
module2.add("Timberland", "T", 18, "Chinese");
module2.add("Vincent", "V", 19, "English");
module2.add("Wilson", "WW", 20, "German");
module2.list();

module2.remove(13);
module2.remove(14);
module2.remove(15);
module2.remove(16);
module2.remove(17);
module2.remove(18);
module2.list();

module2.saveToFile();