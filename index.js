function ageCalculator() {  
    //collect input from HTML form and convert into date format  
    var DDinput = document.getElementById("DD").value; 
    var MMinput = document.getElementById("MM").value; 
    var YYYYinput = document.getElementById("YYYY").value;
    //function to get the current date
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth()+1;
    var currentDay= date.getDate();
    //check user provide input or not  
    if(DDinput==null || DDinput==''){  
         document.getElementById("DD").innerHTML = "must be a valid day";    
      
    } 
    if(MMinput==null || MMinput==''){  
        document.getElementById("MM").innerHTML = "must be a valid month";    
   
   } 
    if(YYYYinput==null || YYYYinput==''){  
    document.getElementById("YYYY").innerHTML = "must be a valid year";  
     
 
 } 
 else{
    //getyears
   var yearAge= currentYear-YYYYinput;
   //getmonths
     if(MMinput>=currentMonth){
         yearAge--;
        var monthAge=12+currentMonth-MMinput;
    }
    else{
      var monthAge=currentMonth-MMinput;
   }
   //getdays
    if(DDinput>=currentDay){
       monthAge--;
       var dateAge=31+currentDay-DDinput;  
      }
    else{
       var dateAge= currentDay-DDinput;
         }
         if (monthAge< 0) {  
            monthAge = 11;  
            yearAge--;  
          } 
          if(yearAge<0){
            yearAge=0;
            monthAge=0;
          }
 }
 document.getElementById("result1").innerHTML=  yearAge;
document.getElementById("result2").innerHTML=  monthAge;
document.getElementById("result3").innerHTML=  dateAge;

}