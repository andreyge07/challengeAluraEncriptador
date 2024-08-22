
alert("No está permitido usar mayúsculas o caracteres especiales")
function interactivo_encripcion() {
const imagen=document.getElementById("imagen");
let cajatexto=document.getElementById("textocaja2");
let text = document.getElementById("texto_1").value.toLowerCase();


let encripcion = text
  
.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    .replace(/[^a-z0-9\s]/g, '');

   
    document.getElementById("textocaja2").value = encripcion;

if(imagen.style.display === 'block' ){
    imagen.style.display = 'none';
    cajatexto.style.display = 'block';
    boton3.style.display='block';
    
} 
else{
    cajatexto.style.display = 'block';
    boton3.style.display='block';
    imagen.style.display = 'none';


}


}
function interactivo_desencripcion(){
    let text = document.getElementById("texto_1").value;
    
 

    let decriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById("textocaja2").value=decriptado;
        

 }
 function copiar() {
    let copiarTexto=document.getElementById("textocaja2").value;
   
   
         navigator.clipboard.writeText( copiarTexto);
        console.log('contenido copiado');
      
    
    alert("Texto copiado: " + copiarTexto);

 }
 
