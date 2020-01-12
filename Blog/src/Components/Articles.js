import React, { Component } from 'react';
import {
    Card, Button, Container, Badge, Row, Col, CardImg, CardHeader, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Articles extends Component {
    state = {
        dataActuelle: []
    }

    componentWillMount() {


        setInterval(() => {
            this.setState({ dataActuelle: this.props.data });
        }, 1000);
    }

    PrintCards = () => {
        let cards = [];
        for (let index = 0; index < this.state.dataActuelle.length; index++) {
            cards.push(<Col key={index} style={{ padding: "10px" }} >
                <Card style={{ width: "250px" }}  >
                    <CardHeader>{this.state.dataActuelle[index].Name}
                        <h6 style={{ float: "right" }}>Vote:
                        <Badge color="danger" >
                                {this.state.dataActuelle[index].vote}
                            </Badge>
                        </h6>
                    </CardHeader>
                    <CardImg src={this.state.dataActuelle[index].URL} alt="Card image " />
                    <CardBody>
                        <Button color="dark" ><Link style={{ color: "white" }} to={"/ArticlePage/" + this.state.dataActuelle[index].id} >Show More</Link></Button>
                    </CardBody>
                </Card></Col>
            )
        }
        return (cards);
    }



    render() {
        return (
            <Container>
                <Row ><Col style={{ padding: "10px" }} >
                    <Card color="dark" style={{ width: "250px" }}  >
                        <CardHeader style={{ color: "white" }} >+ Add Aricle</CardHeader>
                        <CardImg src="https://cdn0.iconfinder.com/data/icons/databases-and-networking/100/DB-addition-512.png" alt="Card image " />
                        <CardBody>
                            <Button color="light" ><Link to="/AddArticle" >Add</Link></Button>
                        </CardBody>
                    </Card></Col>
                    {this.PrintCards()}

                </Row>
            </Container>

        );
    }
}
