  //IFEE -- Immediately Inviked function Expresion
  (function(){


    function Start(){

        let student: objects.Student;
    
        student = new objects.Student(20, "David", "D333333");
        student.saysHello();
        student.studies();
        
    }
    window.addEventListener("load", Start);
  })();
    
  