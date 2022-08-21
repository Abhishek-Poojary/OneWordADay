import React ,{useEffect,useState} from "react";

const BackGround=(props)=>{
    return (
        <div className="custom-background">
            {props.children}
        </div>
    );
}


export default BackGround;