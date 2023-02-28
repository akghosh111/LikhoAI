import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Tweets extends Component {
    constructor() {
        super()
        this.state ={
            heading:`The response from the AI will be shown here`,
            response:`........await the response`
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj.tweet);
    
        /////OPENAI
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.openai.com/v1/completions");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer `);
        xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");
        xhr.send(JSON.stringify({
            prompt: `Write a tweet for me on this topic- ${formDataObj.tweet}`,
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            model: "text-davinci-002"
        }));
    
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                this.setState({
                    heading: `AI Tweet Suggestions for: ${formDataObj.tweet}`,
                    response: `${response.choices[0].text}`
                });
            } else {
                console.log('Request failed.  Returned status of ' + xhr.status);
            }
        };
    };
    


    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <br/>
                    <h1>Generate Twitter tweet ideas</h1>
                    <br/>
                    <h4>Generate tweet ideas using LikhoAI, just write the topic and get tweet suggestions</h4>
                    <br/>
                    <br/>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What topic would you like to get a tweet for?</Form.Label>
                            <Form.Control
                                type="text"
                                name="tweet"
                                placeholder="Enter topic"/>
                            <Form.Text className="text-muted">
                                Enter as much information as possible for more accurate suggestions
                            </Form.Text>
                        </Form.Group>


                        <Button variant="primary" size="lg" type="submit">
                            🤖Get AI Suggestions
                        </Button>

                    </Form>


                    <br/>
                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                            <br/>
                            <br/>
                            <Card.Text>
                                <h4>
                                    {this.state.response}
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
    }
    

export default Tweets





