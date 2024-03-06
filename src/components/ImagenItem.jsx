import React from 'react';

const ImageItem = ({ title, url }) => {
    return ( 
        <div className='row border shadow'>
            <img src={ url } alt={ title } className=''/>
            <p>{ title }</p>
        </div>
    );
}
 
export default ImageItem;