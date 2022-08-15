import React, { Fragment, useState } from 'react';
import CardContainer from '../common/CardContainer';


const Home = () => {
    const [searchWord,setSearchWord]=useState('hey');
    return (
        <Fragment>


            <div className='container-fluid py-5 bg-secondary'>
                <h2>Welcome to Learn One Word A Day </h2>
                <button className='btn btn-primary btn-lg' >Learn</button>
            </div>
           {searchWord && <CardContainer word={searchWord} />} 
        </Fragment>

    )
}

export default Home;