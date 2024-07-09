import LudoBoard from "./LudoBoard"

export default function LudoBoardTab(){
    return (
        <>
        <LudoBoard player="Blue" playerColor="blue"/>
        <LudoBoard player="yellow" playerColor="yellow" textColor="black"/>
        <LudoBoard player="green" playerColor="green"/>
        <LudoBoard player="red" playerColor="red"/>
        </>
    )
}