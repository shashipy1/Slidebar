import React, { useContext }    from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {

    // const data = useContext(AppContext);
    const {openSidebar, openModel} = useGlobalContext(AppContext);

    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            <button className='btn' onClick={openModel}>
                show model
            </button>
        </main>
    )
};

export default Home;
