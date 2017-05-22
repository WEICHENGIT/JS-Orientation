/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//allow pasting

//question 1a
function factorielIt(x)
{
  var factorial=1;
  for(i=1; i<=x; i++)
  {
    factorial=factorial*i;
  }
  return factorial;
}
console.log("The factorial of 4 is "
            +factorielIt(4)
            +" by applying factorielIt");

//question 1b
function factorielRec(x)
{
	if(x<=1)
	{return 1;}
	else
	{return factorielRec(x-1)*x;} //regression
}
console.log("The factorial of 10 is " 
            +factorielRec(10)
            +" by applying factorielRec");

//question 1c
function factorielTableau(arr)
{
  var factorial=[ ];
  for (var i=0;i<arr.length; i++)
  { factorial.push(factorielRec(arr[i]));}
  return factorial;
}
console.log("The factorial of [2,3,4] is [" +factorielTableau([2,3,4])
+"] by applying factorielRec");

//question 1d
function factorielMap(arr)
{
  var factorial = new Map();
  for (var i=0;i<arr.length; i++)
  {
    factorial.set(arr[i],factorielRec(arr[i]));
  }
  return factorial;	
}
console.log("The factorial of [2,3,4] is resulted as mapping:");
console.log(factorielMap([2,3,4]));


//question 2a
function input(para) 
{
  var test = para;
  var arr =[];
  arr = test.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(/\s+/);
  /*remove all special characters: there remove anything that's not letter*/
  /*or replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') --> place all characters you want to avoid here */
  return arr;
}
 
function countWords(text) 
{
  var wfmap=new Map();//map between words and frequency
  var warray=[ ];//array of words
  var farray=[ ];//array of frequency
  for (var i=0;i<text.length; i++)
  {
    if (wfmap.has(text[i])==false)
    {
      wfmap.set(text[i],1);
      warray.push(text[i]);
      farray.push(1);
    }
    else
    {
      wfmap.set(text[i], wfmap.get(text[i])+1);
      warray.push(text[i]);
      farray.push(wfmap.get(text[i]));
    }
  }
  return [wfmap,warray,farray];
}

//input a random paragraph of text
var paragraph="To create the argument to system() simply concatenate the strings with the operator +, and then call the c_str() of the resulting string method convert in char * (because system() takes a char * argument). Don't forget the & to launch the Unix program in the background.As with display function, the function to play the object should be declared in the Photo and Video classes and in the base class to allow a polymorphic call on the class hierarchy. However, unlike the display function, its implementation does not have meaning at the level of the base class. How to call - you we this type of method and how to report them? Modify the Makefile if necessary (we remember that he shouldn't put the .h in SOURCES). Compile, fix any errors, and test the program. If you did it correctly above, it will be possible to instance of the base class objects. Why?";
//output the map between every word of its frequency
console.log("This is the mapping between words and their frenquency "
            +countWords(input(paragraph))[0]);

//question 2b
function WorldList(text)
{
  frequency= countWords(input(text))[2];
	word= countWords(input(text))[1];
  wf=countWords(input(text))[0];

  this.maxCountWord=function()
  {
    maxfre=Math.max.apply(null,frequency);//get the maximum frequency among all words
	  maxword=word[ frequency.indexOf(maxfre)];//get the word having the maximum frequency
    return [maxword, maxfre];
  }
  
  this.getWords=function ()
  {
    return countWords(input(text))[1];//get the array composed by by all words
  }
 
  this.getCount=function(word)
  {
    return wf.get(word);//get the frequency of the given word
  }
}

object=new WorldList(paragraph);
console.log("The word '"
            +object.maxCountWord()[0]
           +"' has the highest frequency, appearing "
           +object.maxCountWord()[1]
            +" times.");
console.log("This is the array of all words which appear in the text:");
console.log(object.getWords());
console.log("The word 'to' is used for "+object.getCount("to")+" times.");

//question 2c
object.applyWordFunc=function(fun)
{
  var prop=[];
  for(var i=0;i<word.length; i++)
    {
      prop.push(fun(word[i]));
    }
  console.log("This is the array of objects, and each object has two properties of each word: word frequecny and word length.");
  console.log(prop);
  console.log("For example the word '"
              +word[0]
              +"' whose length is "
              +prop[0].len
              +" appears for "
              +prop[0].fre
             +" time(s).");
}

//question 2d
object.applyWordFunc
(
function(w)//this is the anonymous function definded in 2d
  {
  var lenfre=new Object()
  lenfre.len=w.length;
  lenfre.fre=wf.get(w);
  return lenfre;
  }
);

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
}
student.print();

//question 3c
//ForeignStudent constructor
function ForeignStudent(name,firstName,id,nationality) {
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
??? var student = 
	{
??????? createStudent: function (name, firstName, id) 
	{
??? var student1 = new Student(name, firstName, id);
??? return student1;
??????? },
createForeignStudent: function (name, firstName, id, nationality) {
??? var student2 = new ForeignStudent(name, firstName, id, nationality);
??? return student2;
}
??? }
??? return student;
})();

//question 3e
var module2 = (function () 
{
??? var promotion = {
student: [],
add: function (name, firstName, id, nationality) {
??? if(typeof nationality == 'undefined')
promotion.student.push(new Student(name, firstName, id));
??? else
promotion.student.push(new ForeignStudent(name, firstName, id, nationality));
??? return promotion.student;
},

remove: function (id) {
??? for(var i = 0; i < promotion.student.length; i++) {
if(promotion.student[i].id == id)
??? promotion.student.splice(i, 1);
??? }
??? return promotion.student;
??????? },

list: function() {
??? for(var i = 0; i < promotion.student.length; i++) {
if(typeof promotion.student[i].nationality == 'undefined')
??? console.log("student: " + promotion.student[i].name + ", " + promotion.student[i].FirstName + ", " + promotion.student[i].id);
??????? else
??? console.log("student: " + promotion.student[i].name + ", " + promotion.student[i].FirstName + ", " + promotion.student[i].id + ", " + promotion.student[i].nationality);
??? }
},

saveToFile: function () {
??????????? var file = JSON.stringify(promotion);
??????????? return file;
??????? }
??? };
??? return promotion;
})();

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