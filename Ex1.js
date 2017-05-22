//WEI CHEN
//email:weichen@whu.edu.cn

//question 1a
function factorielIt(x)
{
  var factorial=1;
  for(var i=1; i<=x; i++)
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
console.log("The factorial of [2,3,4] is [" 
            +factorielTableau([2,3,4])
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