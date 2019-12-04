import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import me from "./Me.jpg";
import "./Itemstyle.css";

class Itemlist extends Component {
	render() {
		return (
			<div className="Itemlist">
                <Container>
                    <CardDeck style={{ paddingTop: '10%'}}>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Anak Agung</Card.Title>
                            <Card.Text>
                                Manusia paling keren.
                            </Card.Text>
                            <Button variant="primary">Jangan di Klik</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Gede</Card.Title>
                            <Card.Text>
                                Sumpah ini orang keren banget.
                            </Card.Text>
                            <Button variant="primary">Soalnnya nanti kamu</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Wiranata Kencana</Card.Title>
                            <Card.Text>
                                Kalo ga percaya yaudah-_-
                            </Card.Text>
                            <Button variant="primary">Bakal tergila-gila hehe</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    <CardDeck style={{ paddingTop: '10%', paddingBottom: '10%'}}>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Anak Agung</Card.Title>
                            <Card.Text>
                                Manusia paling keren.
                            </Card.Text>
                            <Button variant="primary">Jangan di Klik</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Gede</Card.Title>
                            <Card.Text>
                                Sumpah ini orang keren banget.
                            </Card.Text>
                            <Button variant="primary">Soalnnya nanti kamu</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={me} />
                            <Card.Body>
                            <Card.Title>Wiranata Kencana</Card.Title>
                            <Card.Text>
                                Kalo ga percaya yaudah-_-
                            </Card.Text>
                            <Button variant="primary">Bakal tergila-gila hehe</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Container>
			</div>
		);
	}
}

export default Itemlist;