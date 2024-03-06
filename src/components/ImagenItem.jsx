import React from 'react';

const ImageItem = ({ title, url }) => {
    return ( 
        <div className='row'>
            <img src={ url } alt={ title } className='col-md-4 mb-3' />
            <p>{ title }</p>
        </div>
    );
}
 
export default ImageItem;