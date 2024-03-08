import React from 'react';
import useApi from '../helpers/useApiGiphy';
import ImageItem from './ImagenItem';
import { Container, Row, Col } from 'react-bootstrap';

const DisplayGiphys = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KGIlC1VrDB7B9VOKDpBXLDyZwSUM3oK6&q=${category}`;
    const { loading, data } = useApi(url);

    return ( 
        <Container className='container-fluid'>
            <br />
            <div className='row mx-2'>
                <div className='col-9'>
                </div>
                <div className='col-3'>
                    <h3 className='text-center text-danger'>{ category.toUpperCase() } </h3>
                </div>
                <hr style={{ height: '6px', backgroundColor: 'red' }}/>                            
            </div>
            

            <Row>
            {loading ? (
                    data.map(img => (
                        <Col key={img.id} md={3} className="mb-3">
                            <ImageItem title={img.title} url={img.images.downsized_medium.url} />
                        </Col>
                    ))
                ) : (
                    <p>Loading...</p>
                )}              
            </Row>
        </Container>

     );
}
 
export default DisplayGiphys;