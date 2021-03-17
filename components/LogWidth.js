import {useRef, useState, useEffect} from 'react'

function LogWidth(props){
    const el = useRef()
    const [w, setW] = useState()

    useEffect(() => {
        const bb = getComputedStyle(el.current)
        setW(bb.width)
    },[])

    return(
        <div ref={el}>{w}</div>
    )
}

export default LogWidth