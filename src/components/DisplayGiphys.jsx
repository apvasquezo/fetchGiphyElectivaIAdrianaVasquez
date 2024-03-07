import React from 'react';
import useApi from '../helpers/useApiGiphy';
import ImageItem from './ImagenItem';
import { Container, Row, Col } from 'react-bootstrap';

const DisplayGiphys = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KGIlC1VrDB7B9VOKDpBXLDyZwSUM3oK6&q=${category}&limit=24`;
    const { loading, data } = useApi(url);

    return ( 
        <Container className='container-fluid'>
            <br />
            <h3>{ category.toUpperCase() } </h3>
            <hr style={{ height: '5px', backgroundColor: 'violet' }}/>
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