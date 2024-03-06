import React from 'react';
import useApi from '../helpers/useApiGiphy';
import ImageItem from './ImagenItem';


const DisplayGiphys = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KGIlC1VrDB7B9VOKDpBXLDyZwSUM3oK6&q=${category}&limit=10`;
    const { loading, data } = useApi(url);

    return ( 
        <div className='container'>
            <br></br>
            {
                loading ?
                    data.map(img => (
                        <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </div>

     );
}
 
export default DisplayGiphys;