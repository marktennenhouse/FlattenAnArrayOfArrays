//Use a recursive call to flatten an arbitrary array of arrays.

var result = [];


function ShowTheResults()
{
var someData = document.getElementById("txtData").value;

var dataToProcess = eval(someData); // convert it to a javascript object.
 ProcessTheData(dataToProcess);

 //show the results in a div or the console.
 console.log(result);
  document.getElementById("divResults").innerHTML = result;
}

//this gets called recursively for each object in the array.
 function ProcessTheData(someArray)
{
  
    someArray.forEach(function(item) {
    
    FlattenIt(item);
  });

 
}

//recursive javascript call in here.
function FlattenIt(incomingData) {
  
  // This could be done shorter using ternary operators, but that would only make it harder to read.
   if (Array.isArray(incomingData))
   {
     ProcessTheData(incomingData);
   }
  else
  {
    result = result.concat(incomingData);
  }
}