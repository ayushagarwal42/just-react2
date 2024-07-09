import { useState } from "react"

export default function LudoBoard({ player, playerColor, textColor }) {

    let [count, setCount] = useState(0);
    let styles = { backgroundColor: playerColor, color: textColor };
    return (
        <div>
            <p>{player} moves : {count}</p>
            <button onClick={()=>{setCount((count)=>count+1)}} 
                    style={styles}>
                +1
            </button>
        </div>
    );
}