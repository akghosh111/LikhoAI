import React from 'react'
import { Component } from 'react'
import Display from './Display'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import likhobanner from '../likhobanner.png'

class Home extends Component {
    render() {
        return (
            <div>
                <br/>
                    <Container>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={likhobanner}
                                alt="Likho AI"/>
                            </Carousel.Item>
                        </Carousel>
                        <br/>
                        <br/>
                        <h1>🔥 Online Artificial Intelligence based Content Generator Platform 🔥 </h1>
                        <p> Start by picking any of the use-cases below </p>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <Display
                                    header="Product Descriptions"
                                    title="Generate Product Descriptions"
                                    text="Generate description for any product, simply write name & write it's purpose in 1-2 lines"
                                    theLink="/product-description"/>
                            </Col>

                            <Col>
                                <Display
                                    header="Marketing Emails"
                                    title="Cold Email Template"
                                    text="Write about the email you want to generate"
                                    theLink="/cold-emails"/>
                            </Col>

                            <Col>
                                <Display
                                    header="Creating Tweets"
                                    title="Generate Tweets for your personal brand/business"
                                    text="Get Tweet ideas"
                                    theLink="/tweets"/>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
    
}
export default Home