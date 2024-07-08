import React, {useState, useEffect} from "react"

const Usuario = () =>{
    const [nameUser, setNameUser] = useState("")
    const [termContrato, setTermContrato] = useState(false)

    const handleUsuario = (evento) => {
        /*¿Donde está en el evento lo que viene escrito
        por el usuario desde el input de texto?
        Respuesta: evento.target.value
        */
        setNameUser(evento.target.value)
    }
    const handleTerminos = () =>{
        setTermContrato(!termContrato)
    }
    return(
        <>
            <h1>Usuario</h1>
            <label htmlFor="usuario">Indique un nombre usuario</label><br/>
            <input type="text" name="usuario" placeholder="Por ejemplo Pepo..." onChange={handleUsuario}></input>
            <br/><br/>
            {
                nameUser == "Hector" &&
                <p>Ya existe ese Usuario</p>
            }
            <br/>
            <input type="checkbox" value="true" name="terminos" checked={termContrato} onChange={handleTerminos}/>
            <label htmlFor="terminos">Acepto Términos de contrato</label><br/><br/>
            <button type="button">Guardar Nombre Usuario</button>
        </>
        
    )
}
export default Usuario