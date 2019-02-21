

var number1 = [];
var number2 = [];

function hitung(){
    

    //ambil data dari input 
    var getNumber1 = $("#bil_1").val();
    //menambah data dari input ke array plat_bk
    number1.push(getNumber1);
    var getNumber2 = $("#bil_2").val();
    //menambah data dari input ke array plat_bk
    number2.push(getNumber2);
    $("#cetak").empty();
   for(var x=0; x<number1.length; x++){
        var a = parseInt(number1[x]);
        var b = parseInt(number2[x]);
        var hasil =a*b;
        $("#cetak").append("<li>"+a+" x "+b+" "+hasil+"</li>");    


   }
  
}   


    
      
         
     
  

