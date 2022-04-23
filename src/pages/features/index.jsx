import './feature.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";

const Feature = () => {
    return (
        <div className='feature'>
            <div>
                <h1 className='panel'>Not Just A Website It's future</h1>
            </div>
            <div>

                <Container  >


                            <Row>
                                <Col>
                                    <h1 className='h1'>1</h1>
                                </Col>
                                <Col>
                                    <h2>Create a website</h2>
                                    <p className='para'> Select from any of our industry-leading website templates,
                                        designer fonts, and
                                        color
                                        palettes that best fit your personal style and professional needs.</p>

                                </Col>
                            </Row>
                            <Row>
                                <Col><h1 className='h1'>2</h1></Col>
                                <Col><h2>Sell anything</h2>
                                    <p className='para'> Explore which tools you want to add—whether it’s setting up an
                                        online store, booking
                                        services, or adding your favorite third-party extensions.</p>

                                </Col>
                            </Row>
                            <Row>
                                <Col><h1 className='h1'>3</h1></Col>
                                <Col><h2 className='para'> Market your business</h2>
                                    <p>Stand out in every inbox and social feed. On-brand email campaigns and social
                                        tools
                                        make it easy to retain customers and grow your audience.</p>
                                </Col>
                            </Row>



                </Container>


            </div>
        </div>

    )
};
export default Feature;
