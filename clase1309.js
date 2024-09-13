/*

OBJETOS 


1 ) Que es 

        Es un tipo de data type  que relaciona clave : valor

2 ) Sintaxis basica

        Importante nombrar las claves entre comillas para luego no tener problemas accediendo a los datos 

        Para acceder a valores exactos de un objeto 
            Si no tiene espacios el nombre de la clave -> nombreObjeto.clave
            Si tiene espacios el nombre de la clave ->

*/  

const practicaSintaxis = {

    "string": "Pepe",
    "num": 78,
    "boolean": true,
    "array": [456, 165, 456, "stringg"],
    "objeto": {
        "calle": "C/ Isaac Albeniz",
        "numerodirec": "36",
    }

}


const edadesArr = [45, 78, 12, 89]

const personasArr = ["pepe", "manolo", "luis", "fer"]

const personas = { 
    
    'nombre': "pepe", 'edad': 45,
    'nombre': "manolo", 'edad': 78,
    'nombre': "luis", 'edad': 12,
    'nombre': "fer", 'edad': 89,

}

const usuarios = ["Jordan", "jordan@gmail", 10, 9, 6, 78, 99]

const datosReal = {

    'nombre': "Jordan",
    'email': "jordan@jordan@gmail",
    'javascriptNota': 10,
    'htmlNota': 9,
    'punisherCuenta': 6,
    'peso': 78,
    'peso': 99,
}

//console.log(datosReal.peso)

//console.log(datosReal)



/*

AÑADIENDO CLAVES: VALOR A UN OBJETO

*/



datosReal.direccion = { 
    calle: 'C/Isaac Albeniz',
    numero: '36',
}

datosReal.notasHistory = [7, 8, 9, 1, 6, 0]

//onsole.log(datosReal)


/*
BRACKET NOTATION JS OBJECTS

    nombreObjeto[nombreClaveQueDaProblemas] = nuevoValor
*/

datosReal[999999] = 555

//console.log('Con esta bracket notation podemos meter claves sin problema: ' + datosReal)

//console.log()


//console.log(datosReal['htmlNota'])
//console.log(datosReal['direccion']['calle'])


let deporte = 'Futbol'
    //window.prompt('Deporte favorito')
let nivel = 'alto'
    //window.prompt('Nivel de proficiencia')

datosReal.deporte = deporte 
datosReal.nivel = nivel

//console.log(datosReal)

/*
DERIVADA DE BRACKET NOTATION -> DYNAMIC PROPPERTIES

    Para acceder a CLAVES -> sirve objeto[clave] o objeto.clave
    Para acceder a VALORES -> SOLO SIRVE objeto[valor]
*/



/*

BORRANDO CLAVEs: VALOR DE UN OBJETO 

        Usualmente se usan metodos como filter() -> "Buscame esto X dentro de este objeto y damelo, para poder cambiarlo o borrarlo del objeto original"
        De todas maneras hay un metodo propio en los objetos -> delete objeto[nombreClave]
                                                            ->  delete objeto.nombreClave

*/

delete datosReal.deporte

datosReal.update = 'Hemos borrado deporte'

//console.log(datosReal)




/*

OBJETOS MUTIDIMENSIONALES -> ARRAYS QUE CONTIENEN MULTIPLES OBJETOS -> MATRICES N CLAVES CON MULTIPLES VALORES 

CREAR UN NUEVO OBJETO EN UN ARR CON MULTIPLES OBJETOS DENTRO   ->   METER UNA NUEVA COLUMNA

        Funciona como un array, quiero meterle al final un objeto? Muy facil

            nombreARR.push({clave: valor , clave: valor , clave: valor , clave: valor  ,clave: valor })

*/

/*

*/


const contact = {

    name: "Harry Potter",
    phone: "333",
    email: "harr@gmail.com",

}

//console.log(contact)


/*

ACCEDIENDO A LAS PROPIEDADES DE UN OBJETO


    - DOT NOTATION -> objeto.clave -> claveValor


*/

console.log('Estamos accediendo con objeto.clave a esta propiedad cuyo valor es: ' + contact.name)

contact.nuevaClave0 = 'nuevoValor0'

console.log('Este es el objeto modificado añadiendo la nuevaClave0 : ')

console.log(contact)

contact.objetoNuevasClaves = {

    nuevaClave1: 'nuevoValor1',
    nuevaClave2: 'nuevoValor2',
    nuevaClave3: 'nuevoValor3',

}


console.log('Este es el objeto modificado añadiendo un objeto con las nuevas multiples Claves gracias a la DOT NOTATION:  ')

console.log(contact)



/*

ACCEDIENDO A LAS PROPIEDADES DE OBJETOS

        
        BRACKET NOTATION 

        - Nos permite definir nuevos pares de clave: valor;  



*/

const surname = 'surnameClave'

contact[surname] = 'surnameValor'

console.log('Este es el nuevo objeto creando un nuevo par KEY: VALOR gracias a la BRACKET NOTATION: ')
console.log(contact)

contact['numeroNovios'] =  27

console.log('Este es el nuevo objeto creando un nuevo par KEY: VALOR con la BRACKET NOTATION resumida: ')
console.log(contact)
