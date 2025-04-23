//export - ESM sirve para tener disponible la funcion mediante modulos

export const  CH = "CH53";  //Se puede usar cualquier cosa al export

export function validarCantidad(cantidad){
    if(cantidad.trim().length<=0){
        return false;
    }//length
    if(isNaN(cantidad)){
        return false;
    } //isNaN
    if(Number(cantidad)<=0){
        return false;
    }//<=0
    return true;
} //validar cantidad

export default function validarEmail(email){
    const regex = RegExp("[^@ \t\r\n]+@[^@\t\r\n]+\.[^@ \t\r\n]+");
    return regex.test(email);
}//validarEmail

export function validarRFC(RFC){
    const regex = new RegExp("^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$");
    return regex.test(RFC);
}

//forma 2 de validar las funciones
//export {validarCantidad};, pero entonces ya no se usa el export de las funciones de arriba

