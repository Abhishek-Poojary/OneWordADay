import React, { Fragment, useState } from 'react';
import CardContainer from '../common/CardContainer';


const Home = () => {
    const [searchWord, setSearchWord] = useState('hey');
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