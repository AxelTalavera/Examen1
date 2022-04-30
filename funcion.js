function Calcular(){
    let primer_valor= document.getElementById("b");


    let SB = Number(primer_valor.value);
    document.getElementById("SB").value = SB

    let resultad = Number(primer_valor.value) *0.07;
    document.getElementById("Ins").value = resultad

    let Deduccion = Number(primer_valor.value) -resultad;
    document.getElementById("sN").value = Deduccion

  
    let r =Deduccion *12;
    let re=r-200000;
    let mul=re*0.20;
    let ip=mul+15000;
     irA=ip/12;
     document.getElementById("IR").value=irA;
/*
   if (primer_valor>=100000.01 && primer_valor<=200000){
         let r =Deduccion *12;
         let re=r-200000;
         let mul=re*0.20;
         let ip=mul+15000;
          irA=ip/12;
          document.getElementById("IR").value=irA;
        
    } 
    
   
    
/*
    if(primer_valor>0 && primer_valor<=100000){
        let ir = Number(0);
        
    }
else if(primer_valor>=100000.01 && primer_valor<=200000){
    let primer =salario-100000;
    primer_valor=primer*0.15;
    document.getElementById("IR").value=primer_valor/12;
}
else if(primer_valor>=200000.01 && primer_valor<=350000){
    let primer =salario-200000;
    primer_valor=(primer*0.20)+15000;
    document.getElementById("IR").value=primer_valor/12;
}

else if(primer_valor>=350000.01 && primer_valor<=500000){
    let primer =salario-200000;
    primer_valor=(primer*0.25)+45000;
    document.getElementById("IR").value=primer_valor/12;
    
}
else{
  let primer=primer_valor-500000;
  primer=(primer*0.30)+82500
  document.getElementById("IR").value=primer;  
}*/


let Fin = Number(primer_valor.value) -(resultad+irA);
    document.getElementById("SD").value = Fin


}