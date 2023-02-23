import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://api.whatsapp.com/send?phone=+919518179383&amp;text=Hi there! :)' className='me-4 text-reset'>
                        <MDBIcon fab icon="whatsapp" />
                    </a>
                    <a href='https://twitter.com/PrabhkiratSin17' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='https://www.instagram.com/prabhkirat05' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/prabhkirat-singh-12a5691b7/' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='https://github.com/Prabhkirat0530' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="heart" className="me-2" />
                                BaeSense
                            </h6>
                            <p>
                                Smell the Sense of your Bae with our exclusive collections: Special, Swat and Simple
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Special
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Swat
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Simple
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Products
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Google
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Maps
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Rajpura, Punjab 140417, IN
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                prabhkirat05@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 91 9518179383
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='https://prabhkirat0530.github.io/Portfolio/'>
                    Prabhkirat
                </a>
            </div>
        </MDBFooter>
    );
}