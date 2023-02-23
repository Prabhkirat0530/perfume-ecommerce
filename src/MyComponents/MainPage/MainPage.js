import React from 'react';
import './MainPage.css';
import NewsLetter from '../NewsLetter';
import Carousel from './Carousel';
import banner from '../Images/Banner.svg';
import Swat from '../Images/swat.svg';
import Special from '../Images/special.svg';
import Simple from '../Images/simple.svg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';


export default function Featured() {

    //Today's Day 
    const weekBuilder = (e) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[e.getDay()];
        return `${day}`
    }


    return (
        <>
            <Carousel />
            <div className="row m-0 p-0">
                <div className='card p-5 m-0 border-0 bg-'>
                    {/* Date */}
                    <div className="container text-start p-2">
                        <h2 className='fs-bold mx-0'><b>Sense for {weekBuilder(new Date())}</b></h2><br />
                    </div>

                    {/* Cards */}
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <a href='/' >
                                <Card className='border-success shadow'>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1895/2657/products/CKOne_1080x.jpg?v=1623859569" />
                                    <Card.Body>
                                        <Card.Title>Special <Badge bg="secondary">New</Badge></Card.Title>
                                        <Card.Body>CK ONE EAU DE TOILETTE<br />Rs 5000</Card.Body>
                                        <Button>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <a href='/' >
                                <Card>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1895/2657/products/IsseyMiyakeL_eauD_isseyWoodnWoodEauDeParfumIntenseMenA_1800x1800.jpg?v=1665150968" />
                                    <Card.Body>
                                        <Card.Title>Swat</Card.Title>
                                        <Card.Body>ISSEY MIYAKE L'EAU D'ISSEY<br />Rs 2500</Card.Body>
                                        <Button>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <a href='/' >
                                <Card>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1895/2657/products/versacephedt_720x.jpg?v=1624454609" />
                                    <Card.Body>
                                        <Card.Title>Simple <Badge bg="secondary">New</Badge></Card.Title>
                                        <Card.Body>VERSACE POUR - DE TOILETTE<br />Rs 1000</Card.Body>
                                        <Button>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <a href='/' >
                                <Card>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1895/2657/products/HugoBossBottledEauDeParfumForMenA_720x.jpg?v=1665146475" />
                                    <Card.Body>
                                        <Card.Title>Simple</Card.Title>
                                        <Card.Body>HUGO BOSS - EAU DE PARFUM<br />Rs 1520</Card.Body>
                                        <Button>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>

                </div>
            </div>


            {/* Featured Card */}
            <div className="container text-center py-5">
                <img style={{ border: '6px grey solid' }} className='rounded shadow-lg' width="100%" src={banner} />
            </div>


            {/* Swat and Special */}
            <div className="my-5">
                <h1 className='p-5'>Our Collections</h1>
                <div className="rounded border-0">
                    <a href='/Products'><img className='w-25 border border-dark shadow-lg rounded mx-3' src={Simple} /></a>
                    <a href='/Products'><img className='w-25 border border-dark shadow-lg rounded mx-3' src={Special} /></a>
                    <a href='/Products'><img className='w-25 border border-dark shadow-lg rounded mx-3' src={Swat} /></a>
                </div>
            </div>

            <hr className='w-50 mx-auto' />

            <NewsLetter />
        </>
    )
}
