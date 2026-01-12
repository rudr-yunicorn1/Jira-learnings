import { useEffect } from "react";

function EffectDemo(){
    useEffect (() => {
        console.log('component mounted')
    },[])

    return (
        <h1> check console</h1>
    )
}

export default EffectDemo