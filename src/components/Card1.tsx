import TypeDark from '../images/type-dark.png';
import TypeNormal from '../images/type-normal.png';

import { Card, CardImg, Col } from 'react-bootstrap';

import '../styles/card1.scss';

export function Card1() {
    return (
        <Col className='mb-3'>
            <Card className='pokemon-card-container'>
                <Card.Body>
                    <Card.Title>
                        <div className='introduction'>
                            <span>Estágio 1</span>

                            <div className='d-flex flex-column pokemon-name'>
                                <span>
                                    <small>Shiny</small> <small>Mega</small>
                                </span>

                                <span>Elite Hitmonlee</span>

                            </div>
                        </div>

                        <div className='icons d-flex align-items-end'>
                            <span>Nv .10</span>
                            <img src={TypeDark} alt='Dark' title='Dark' />
                            <img src={TypeNormal} alt='Normal' title='Normal' />
                        </div>

                    </Card.Title>
                    <CardImg src="holder.js/100px300" />
                    <Card.Text>
                        Teeste de texto aqui
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}