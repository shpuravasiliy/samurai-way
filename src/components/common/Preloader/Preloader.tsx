import React from 'react';
import preloader from '../../../assets/images/Spinner.svg';

const style = {
    alignSelf: 'center',
    justifySelf: 'center',
}

const Preloader = () => {
    return (
        <>
            <img
                src={preloader}
                alt="is loading"
                style={style}
            />
        </>
    );
};

export default Preloader;