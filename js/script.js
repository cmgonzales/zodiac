function clickme(){

    variables();
    
    

    if(variables() >= 120 && variables() <= 218 ){
  
     aquarius();


    }else if(variables() >= 321 && variables() <= 420){
      
      aries();
    
    }else if(variables() >= 421 && variables() <= 520){

      taurus();
      
    }else if(variables() >= 521 && variables() <= 620){
    
      Gemini();
          
    }else if(variables() >= 621 && variables() <= 720){
        
       cancer();
              
    }else if(variables() >= 721 && variables() <= 821){
      
      leo();
            
    }else if(variables() >= 822 && variables() <= 922){
      
      virgo();
            
     }else if(variables() >= 923 && variables() <= 1022){
      
      libra();
            
     }else if(variables() >= 1023 && variables() <= 1122){
      
      scorpio();
            
    }else{
      
      sagittarius();
    
    }
  }   
     
    function variables(){
    
      var mon = document.getElementById("month");
     
      var month = mon[mon.selectedIndex].value;
           
      var dates = document.getElementById("day");

      var point =  dates[dates.selectedIndex].value;
    
       var week =  parseInt(month);

       let per =  parseInt(point);
    
      var result = (per + week);

      return result;
    } 

     function aquarius(){
      
      var dv = document.getElementById("foo")

      while (dv.hasChildNodes()){
          dv.removeChild(dv.lastChild);
      }

      var x = document.createElement("IMG");
      x.setAttribute("src", "img/aquarius.jpg");
      document.getElementById("foo").appendChild(x);
  }
    
      function aries(){

      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }
        var x = document.createElement("IMG");
        x.setAttribute("src", "img/aries.jpg");
        document.getElementById("foo").appendChild(x);
      }

      function taurus(){
        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/taurus.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function Gemini(){
  
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }
        var x = document.createElement("IMG");
        x.setAttribute("src", "img/gemini.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function cancer(){

        var dv = document.getElementById("foo")
        
        while (dv.hasChildNodes()){
                 
          dv.removeChild(dv.lastChild);
        }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/cancer.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function leo(){

        var dv = document.getElementById("foo")
        
        while (dv.hasChildNodes()){
                 
          dv.removeChild(dv.lastChild);
        }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/leo.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function virgo(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/virgo.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function libra(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/libra.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function scorpio(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/scorpio.jpg");
        document.getElementById("foo").appendChild(x);
      }
      function sagittarius(){

        
      var dv = document.getElementById("foo")
      
      while (dv.hasChildNodes()){
               
        dv.removeChild(dv.lastChild);
      }

        var x = document.createElement("IMG");
        x.setAttribute("src", "img/sagttarius.jpg");
        document.getElementById("foo").appendChild(x);
      }







