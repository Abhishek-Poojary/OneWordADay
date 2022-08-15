import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import Card from "./Card";

const CardContainer = (props) => {
    let data = useFetch(props.word)
    const [list, setNoOfList] = useState([]);

    useEffect(() => {
        setNoOfList(data[0].data)
        console.log(data)
    }, [list,data])

    return (
        <Fragment>
            {list && list.map((word, index) => {
                return <Card word={word} key={index}/>
            })
            }
            <h1>d</h1>

        </Fragment>
    )
}


export default CardContainer;