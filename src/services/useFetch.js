import {useEffect,useState} from "react";
import axios from "axios";

const useFetch=(word)=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        if(word!==''){
            axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
            .then((result)=>{
                    setData(result);
            })
            .catch((err)=>{
                setData("No results found")
            });
        }
        
    },[word])

    return [data];
}


export default useFetch;