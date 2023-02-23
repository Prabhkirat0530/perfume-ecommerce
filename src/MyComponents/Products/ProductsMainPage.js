import React from 'react'
import NewsLetter from '../NewsLetter'
import './ProductsMainPage.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

export default function ProductsMainPage() {
    return (
        <>
            <div className="container p-5">
                <h1 className='text-start p-5'>Latest Collection</h1>

            </div>


            <div className="container p-5">
                <h1 className='text-start p-5'>Simple Collection</h1>

            </div>


            <div className="container p-5">
                <h1 className='text-start p-5'>Swat Collection</h1>

            </div>



            {/* Special Collection */}
            <div className="special-card m-4 p-5 text-start">
                <h1 className='special-card-text'><b>Special Collection</b></h1>
                <p className='w-50 text-muted'>A specially handcrafted collection from the finnest craftsman of the country.<br />A premium luxury for you and your loved ones.</p>


                <Row xs={1} md={4} className="g-4 py-5">
                    <Col>
                        <a href='/' >
                            <Card className='bg-black text-light shadow-lg border border-dark'>
                                <Card.Img variant="top" src="https://freepngimg.com/thumb/perfume/9-2-perfume-png-picture.png" />
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' >
                            <Card className='bg-black text-light shadow-lg border border-dark'>
                                <Card.Img variant="top" src="https://freepngimg.com/thumb/perfume/9-2-perfume-png-picture.png" />
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' >
                            <Card className='bg-black text-light shadow-lg border border-dark'>
                                <Card.Img variant="top" src="https://freepngimg.com/thumb/perfume/9-2-perfume-png-picture.png" />
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' >
                            <Card className='bg-black text-light shadow-lg border border-dark'>
                                <Card.Img variant="top" src="https://freepngimg.com/thumb/perfume/9-2-perfume-png-picture.png" />
                            </Card>
                        </a>
                    </Col>
                </Row>

            </div>

            <NewsLetter />
        </>
    )
}
