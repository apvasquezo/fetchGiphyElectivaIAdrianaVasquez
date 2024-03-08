import React from 'react';

const ImageItem = ({ title, url }) => {
    return ( 
        <div className='row m-.25'>
            <div className='col'>
                <img 
                    src={url} 
                    alt={title} 
                    className='img-fluid rounded shadow mb-3' 
                    style={{ width: '250px', height: '200px' }} 
                />
                <p className='text-center bg-danger bg-gradient text-white'>{ title }</p>
            </div>
        </div>
    );
}
 
export default ImageItem;