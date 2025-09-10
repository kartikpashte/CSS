const Conditionals = () => {
    let mode = 0
    return(
        <>
     
            {(mode) ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}      
        </>
    )
}


export default Conditionals