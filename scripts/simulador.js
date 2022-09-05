function gen_table(){
    let n=Number(document.getElementById("pobla").value);
    let l2=Number(document.getElementById("cama").value);
    let l3=Number(document.getElementById("herra").value);
    let l4=Number(document.getElementById("kit").value);
    let l5=Number(document.getElementById("visita").value);
    let l6=Number(document.getElementById("telemoni").value);
    if(n>0 && l2>0 && l3>0 && l4>0 && l5>0 && l6>=0){ 
        /* CASO TOTAL IC*/
        /* n4 calculo la cantidad de personas con IC */
        n3=n*0.20;
        n4b=Number(n3.toFixed(0));
        n4=n4b.toLocaleString("es-ES");
        /* n8 calculo la cantidad de pacientes nuevos por año con IC */
        n7=n3*0.20;
        n8b=Number(n7.toFixed(0));
        n8=n8b.toLocaleString("es-ES");
        /* n10  cantidad de pacientes reinternados por año*/
        n9=n7*0.5*1.15;
        n10b=Number(n9.toFixed(0));
        n10=n10b.toLocaleString("es-ES");
        /* n12 cantidad de días de reinternación promedio*/
        n12=8;
        /* n14 cantidad de días de reinternación en total*/
        n13=n9*n12;
        n14b=Number(n13.toFixed(0));
        n14=n14b.toLocaleString("es-ES");
        /* n36 cantidad de días disponible de la cama de internación por uso App en el año*/
        n35=n13*0.41;
        n36b=Number(n35.toFixed(0));
        n36=n36b.toLocaleString("es-ES");
        /* n16 Gasto Total por internación*/
        n15=l2*n13;
        n16b=Number(n15.toFixed(0));
        n16=n16b.toLocaleString("es-ES");
        /* n18 Gasto Total por internación utilizando la APP*/
        n17=n15*0.41;
        n18b=Number(n17.toFixed(0));
        n18=n18b.toLocaleString("es-ES");
        /* n20 Gasto por utilizar la herramienta*/
        n19=n3*l3*12;
        n20b=Number(n19.toFixed(0));
        n20=n20b.toLocaleString("es-ES");
        /* n22 Gasto Anual por comprar el kit*/
        n21=n7*l4;
        n22b=Number(n21.toFixed(0));
        n22=n22b.toLocaleString("es-ES");
        /* n24 Gasto Inicial por comprar el kit*/
        n23=n3*l4;
        n24b=Number(n23.toFixed(0));
        n24=n24b.toLocaleString("es-ES");
        /* n26 Gasto por comprar el kit luego del 4 año*/
        n25=n21*0.85;
        n26b=Number(n25.toFixed(0));
        n26=n26b.toLocaleString("es-ES");
        /* n34 Ahorro por Consultas Médicas*/
        n33= 4 * l5 * 12 * n7;
        n34b=Number(n33.toFixed(0));
        n34=n34b.toLocaleString("es-ES");
        /* n38 Costo Telemonitoreo*/
        n37= l6 * n3;
        n38b=Number(n37.toFixed(0));
        n38=n38b.toLocaleString("es-ES");
        /* n28 Ahorro por utilizar la herramienta - incluyendo compras iniciales*/
        n27=n23+n19+n17+n37;
        n271=n33+n15-n27;
        n28b=Number(n271.toFixed(0));
        n28=n28b.toLocaleString("es-ES");
        /* n30 Ahorro por utilizar la herramienta hasta el 3° año*/
        n29=n21+n19+n17+n37;
        n291=n33+n15-n29;
        n30b=Number(n291.toFixed(0));
        n30=n30b.toLocaleString("es-ES");
        /* n32 Ahorro por utilizar la herramienta a partir del 4° año*/
        n31=n25+n19+n17+n37;
        n311=n33+n15-n31;
        n32b=Number(n311.toFixed(0));
        n32=n32b.toLocaleString("es-ES");
        /* n40 Ahorro por utilizar la herramienta a partir del 3° año*/
        n39=n291/n15;
        n391=n39 * 100;
        n40=n391.toFixed(2);
        document.getElementById("t2").innerHTML=n4;
        document.getElementById("t4").innerHTML=n8;
        document.getElementById("t5").innerHTML=n10;
        document.getElementById("t6").innerHTML=n12;
        document.getElementById("t7").innerHTML=n14;
        document.getElementById("t8").innerHTML=n16;
        document.getElementById("t9").innerHTML=n18;
        document.getElementById("t10").innerHTML=n20;
        document.getElementById("t11").innerHTML=n22;
        document.getElementById("t12").innerHTML=n24;
        document.getElementById("t13").innerHTML=n26;
        document.getElementById("t14").innerHTML=n28;
        document.getElementById("t15").innerHTML=n30;
        document.getElementById("t16").innerHTML=n32;
        document.getElementById("t17").innerHTML=n34;
        document.getElementById("t18").innerHTML=n36;
        document.getElementById("t19").innerHTML=n38;
        document.getElementById("t20").innerHTML=n40;
    }else{
        alert("Falta ingresar un Número");
    }
}