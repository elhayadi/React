import React, { Component } from 'react';
import { Jumbotron, Button, Alert } from 'reactstrap';
import axios from 'axios';
export default class ArticlesPage extends Component {
    state = {
        dataActuelle: [],
        url: "",
        Name: "",
        URL: "",
        description: "",
        vote: "",
        alert: false
    }

    componentWillMount() {

        this.setState({ url: window.location.pathname.split("/")[2] })
        setInterval(() => {
            this.setState({ dataActuelle: this.props.data });
            this.Search(this.state.url)
        }, 1000);
    }


    Search = (id) => {

        for (let index = 0; index < this.state.dataActuelle.length; index++) {
            if (this.state.dataActuelle[index].id === id) {
                this.setState({
                    Name: this.state.dataActuelle[index].Name,
                    URL: this.state.dataActuelle[index].URL,
                    description: this.state.dataActuelle[index].description,
                    vote: this.state.dataActuelle[index].vote
                })
            }
        }

    }

    Voted = () => {
        let newvote = this.state.vote + 1;
        const article = {
            "Name": this.state.Name,
            "URL": this.state.URL,
            "description": this.state.description,
            "vote": newvote,
            "id": this.state.url
        }
        axios.post("http://localhost:5000/article/update", article)
            .then(res => console.log(res.data))

    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Alert isOpen={this.state.alert} toggle={true}>Article Voted</Alert>

                    <Button style={{ color: "black" }} onClick={this.Voted} color="success" >+Vote: {this.state.vote}</Button>
                    <img style={{ float: "left", paddingRight: "50px" }} alt="logo" src={this.state.URL}></img>
                    <h1 className="display-3">{this.state.Name}</h1>
                    <p className="lead">{this.state.description}</p>
                    <hr className="my-2" />
                    <p>Source: Wikipédia</p>
                </Jumbotron>
            </div>
        );
    }
}
