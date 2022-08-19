import React, { Fragment, useState } from 'react';
import CardContainer from '../common/CardContainer';
import preval from 'babel-plugin-preval/macro'

const Home = () => {
    const [searchWord, setSearchWord] = useState('hey');
    const greetingContent = preval`
  const fs = require('fs');
  var readME= fs.readFileSync(require.resolve('./word.txt'), 'utf8');
  var wordArr = readME.split(\r\n);
  console.log(wordArr)
  
`

    return (
        <Fragment>


            <div className='custom-container-home'>

                <p className='custom-text-home'>Learn One </p>
                <p className='custom-text-home'>Word A Day.</p>
                <button className='btn custom-button-big' >Learn</button>

            </div>

            {searchWord && <CardContainer word={searchWord} />}
        </Fragment>

    )
}

export default Home;