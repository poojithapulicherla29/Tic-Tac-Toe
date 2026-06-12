import React from "react"

const Square=(props)=>{
    return(
        <div 
        onClick={props.onClick} //H ERE WE ARE ADDING A EVENTLISTENER ,SO THAT IF WE CLICK ON THE SQUARE it calls props.onClick ikkada onclick oka function anamata which we will give it where we render it ante manam square ni board lo render chesthunnam kabatti akkade raastham
        style={{
            border:"1px solid ",
            height: "100px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"} }
             className="square">
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square;