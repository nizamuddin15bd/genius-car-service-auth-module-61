import React from 'react';
import leazy from '../../../images/lezy-cat.jpg';

const NotFount = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Minister is Sleeping</h2>
            <img width={'1000px'} src={leazy} alt="" />
        </div>
    );
};

export default NotFount;