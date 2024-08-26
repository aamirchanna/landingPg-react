function Button({label , bgColor , textColor }){

    return(
        <button className= {` border border-blue-400  rounded-md p-2 px-3  ${textColor? textColor:"text-gray-1000"} ${bgColor? bgColor : "white"}  ` } >{label}</button>
    // if no color user enter retirn white 
    )
}
export default Button