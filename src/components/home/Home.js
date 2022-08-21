import React, { Fragment, useEffect, useState } from 'react';
import CardContainer from '../common/CardContainer';
import preval from 'babel-plugin-preval/macro'

const Home = () => {
    const [searchWord, setSearchWord] = useState('');
    const [wordList,setWordList]=useState([]);
    const fileContent = preval`
  const fs = require('fs');
  var readME= fs.readFileSync(require.resolve('./word.txt'), 'utf8');
  var wordArr = readME.split(\r\n);
  module.exports=wordArr; 
`

useEffect(()=>{
    if(wordList.length==0){
        setWordList(fileContent[0].split(/\r?\n/));
    }
},[])

const findRandom=()=>{
   
    let newRandom;
    let rand = Math.floor(Math.random() * wordList.length);
    newRandom = wordList[rand];
    setSearchWord(newRandom)
}
    
    

    return (
        <Fragment>


            <div className='custom-container-home'>

                <p className='custom-text-home'>Learn One </p>
                <p className='custom-text-home'>Word A Day.</p>
                <button className='btn custom-button-big'  onClick={findRandom}>Learn</button>

            </div>

            { searchWord.length>0  && <CardContainer word={searchWord} />} 
        </Fragment>

    )
}

export default Home;