import React, {useState, useEffect} from "react"

const Perfil = () =>{
    // Contador de Likes
    const [contadorLikes, setContadorLikes] = useState(0)
    
    const handleContador = () =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
            <h1>Estoy en Perfil</h1>
            <button type="button" onClick={handleContador}>Sumar Like</button>
            <p>Conteo de likes: {contadorLikes}</p>
        </>
        
    )
}
export default Perfil