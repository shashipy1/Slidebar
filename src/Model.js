import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Model = () => {

    const { isModelOpen, closeModel } = useGlobalContext();

    return (
        <div className={`${isModelOpen ? 'modal-overlay show-modal' :
                'model-overlay'}`}>
            <div className='modal-container'>
                <h3>model content</h3>
                <button className='close-modal-btn' onClick={close}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
};

export default Model;
