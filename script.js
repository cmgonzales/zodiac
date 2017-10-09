function clickme(){

variables();

console.log(variables());

}
   
 
function variables(){

  var mon = document.getElementById("month").selectedIndex;
 
  var month = document.getElementsByTagName("option")[mon].value;
       
  var date = document.getElementById("day").selectedIndex;
  
  var day = document.getElementsByTagName("option")[date].value;

  var point =  parseInt(month);

  return (point);
} 



