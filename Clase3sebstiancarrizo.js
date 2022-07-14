/*variantes y e ingreso de datos* */
let numero= parseInt( prompt("cuantos saludos quieres recibir? \n (en numeros porfavor)"));
let esNumero = !isNaN(numero);
let saludador="";
let r =0;
/*ciclo y condicionale * */
if(esNumero){
    for(let i =0;i!=numero;i++){
      saludador = saludador+" hola";
      r = r+1;
      if(r==5){
        saludador=saludador+ " \n";
        r=0;
      }
    }
      /**salida de datos */
    saludador= saludador+"\n recibiste "+numero+" saludos ";
    alert(saludador);
}
else{
  /**en caso de NaN este mensaje */
    alert("error\n en numeros porfavor, reinicia la pagina");
}