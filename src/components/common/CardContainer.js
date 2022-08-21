import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../customHooks/useFetch";
import DisplayCard from "./DisplayCard";

const CardContainer = (props) => {
    let data = useFetch(props.word)
    const [list, setNoOfList] = useState([]);

    useEffect(() => {
        setNoOfList(data[0].data)
    }, [list, data])

    return (
        <Fragment>
            {
                list && (
                    <div className="custom-display-container">
                        {list && list.map((word, index) => {
                            return <DisplayCard word={word} key={index} />
                        })
                        }
                    </div>
                )
            }
        </Fragment>
    )
}


export default CardContainer;