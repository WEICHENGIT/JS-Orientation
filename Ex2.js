//WEI CHEN
//email:weichen@whu.edu.cn

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
    if (wfmap.has(text[i])===false)
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
console.log("This is the mapping between words and their frenquency:");
console.log(countWords(input(paragraph))[0]);

//question 2b
function WorldList(text)
{
  var frequency= countWords(input(text))[2];
	var word= countWords(input(text))[1];
  var wf=countWords(input(text))[0];

  this.maxCountWord=function()
  {
    var maxfre=Math.max.apply(null,frequency);//get the maximum frequency among all words
	  var maxword=word[ frequency.indexOf(maxfre)];//get the word having the maximum frequency
    return [maxword, maxfre];
  };
  
  this.getWords=function ()
  {
    return countWords(input(text))[1];//get the array composed by by all words
  };
 
  this.getCount=function(word)
  {
    return wf.get(word);//get the frequency of the given word
  };
}

var object=new WorldList(paragraph);
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
  for(var i=0;i<object.word.length; i++)
    {
      prop.push(fun(object.word[i]));
    }
  console.log("This is the array of objects, and each object has two properties of each word: word frequecny and word length.");
  console.log(prop);
  console.log("For example the word '"
              +object.word[0]
              +"' whose length is "
              +prop[0].len
              +" appears for "
              +prop[0].fre
             +" time(s).");
};

//question 2d
object.applyWordFunc
(
  function(w)//this is the anonymous function definded in 2d
  {
    var lenfre=new Object();
    lenfre.len=w.length;
    lenfre.fre=object.wf.get(w);
    return lenfre;
  }
);