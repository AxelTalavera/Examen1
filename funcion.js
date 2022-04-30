function Calcular(){
    let primer_valor= document.getElementById("b");

   
    let resultad = Number(primer_valor.value) *0.07;
    document.getElementById("Ins").value = resultad


    let ir = Number(primer_valor.value) *0.15;
    document.getElementById("IR").value = ir

    
    let sn = Number(primer_valor.value) -ir-resultad;
    document.getElementById("sN").value = sn

    let Sd = Number(sn);
    document.getElementById("SD").value = Sd

    let SN = Number(primer_valor.value)*1;
    document.getElementById("SB").value = SN

}