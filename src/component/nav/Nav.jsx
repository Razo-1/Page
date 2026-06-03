function Nav({text,scrol,upOrDown}){
    return(
        <li onClick={() => scrol(upOrDown)}>{text}</li>
    )
}

export {Nav}