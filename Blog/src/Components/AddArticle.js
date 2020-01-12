import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';
export default class AddArticle extends Component {
    state = {
        Name: "",
        URL: "",
        description: ""
    }

    handleChange = () => {
        let Name = document.getElementById("Name").value;
        let Details = document.getElementById("Details").value;
        let Link = document.getElementById("Link").value;
        const article = {
            "Name": Name,
            "URL": Link,
            "description": Details,
            "vote": 0
        }
        axios.post("http://localhost:5000/article/add", article)
            .then(res => console.log(res.data))


    }

    render() {
        return (
            <div style={{ marginLeft: 250, marginRight: 250, marginTop: 75 }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Article Name:{this.state.Name}</Label>
                        <Input name="name" placeholder="Article name ..." id="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Article Details:</Label>
                        <Input type="textarea" name="text" id="Details" placeholder="..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for=".jpg">Link</Label>
                        <Input name="link" id="Link" placeholder='ex : http://exemple.com/picture.jpg' />
                        <FormText color="muted">
                            Please past the picture Link supports *.jpg and *.png
        </FormText>
                    </FormGroup>

                    <Button style={{ float: "right" }} color="dark" onClick={this.handleChange}>Add</Button>
                </Form></div>
        );
    }
}
