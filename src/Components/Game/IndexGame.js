import React,{useState} from 'react';
import "../Game/StylesGame.css"
import ListGames from './ListGames';
//import Login from './Login';

export default function IndexGame(props) {
    const [logeado, setLogeado] = useState(false);
    const [user, setUser] = useState();
    const handleChange = (e)=>{
        setUser(e.target.value)
    }
    return(
        <>
            <div className="Bg-Game">
                <span className="Exit-Button" onClick={()=>props.setGame(false)}>
                    <i className="fas fa-arrow-alt-circle-left"></i>  Back
                </span>
                {logeado ? <ListGames user={user}></ListGames> : 
                <div className="Formulario">
                    <h2 className="Form-Title">INGRESA TU NOMBRE</h2>
                    <input className="Form-Input" type="text" name="Username" placeholder="Usuario: " 
                    onChange={handleChange} value={user}></input>
                    <input className="Form-Input-Button" type="submit" value="Jugar" onClick={()=> setLogeado(true)} ></input>
                </div>
                }
            </div>
        </>
    )
}