import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import DisplayCard from "./DisplayCard";

const CardContainer = (props) => {
    let data = useFetch(props.word)
    const [list, setNoOfList] = useState([]);

    useEffect(() => {
        setNoOfList(data[0].data)
        console.log(list)
    }, [list,data])

    return (
        <Fragment>
            
            <div className="custom-background-card">
            
            {list && list.map((word, index) => {
                return <DisplayCard word={word} key={index}/>
            })
            }

            </div>


        </Fragment>
    )
}


export default CardContainer;