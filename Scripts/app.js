"use strict"; //Help debug. detect error. prevent bug.

//Code block repeatable //NO name function 
//IFEE= Immediate Invoked Function Expression
//self-executing anonymous function
(function(){
    let myFunctionalVariable = 0;

    function Start(){    // OR let Start = function(){
        let myLocalVariable = 0;
        console.log(`App Started ... ${myFunctionalVariable}`);
    }

    window.addEventListener("load", Start);
    //Call back function in line (Annonynmous function)
    /*
    window.addEventListener("load", function(){
        let myLocalVariable = 0;
        console.log(`App Started ... ${myFunctionalVariable}`);
    });
    window.addEventListener("load", () =>{ //Eccma Script-6
        let myLocalVariable = 0;
        console.log(`App Started ... ${myFunctionalVariable}`);
    });
    */

})();