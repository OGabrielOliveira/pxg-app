import { Card, CardImg, Col } from 'react-bootstrap';

import '../styles/card2.scss';

export function Card2() {
    return (
        <Col className='mb-3'>
            <Card className='pokemon-card-container-2'>
                <Card.Body>
                    <CardImg src="holder.js/100px300" />

                    <Card.Text className='dex-number'>Nº 001</Card.Text>

                    <Card.Text className='variacao'>
                        <small>Shiny</small>
                        <small>Mega</small>
                    </Card.Text>

                    <Card.Title>
                        <h3> Gardevoir </h3>
                    </Card.Title>

                    <Card.Text className='types'>
                        <small className='type-normal'>Normal</small>
                        <small className='type-fighting'>Fighting</small>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>

    )
}