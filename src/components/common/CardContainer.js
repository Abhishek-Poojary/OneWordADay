import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../customHooks/useFetch";
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
            {/* {data.length!==0 && list  && (<div className='custom-card-text-main'><span>Word is  {list[0].word}</span></div>)} */}
            <div className="custom-display-container">
            
            {list && list.map((word, index) => {
                return <DisplayCard word={word} key={index}/>
            })
            }

            </div>


        </Fragment>
    )
}


export default CardContainer;