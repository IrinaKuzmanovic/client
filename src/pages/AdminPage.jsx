import React, { Component } from "react";
import UserService from "../store/services/UserService";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import theatreImage from "../assets/theatre.avif";
import performanceImage from "../assets/performance.avif";
import ticketImage from "../assets/tickets.avif";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <CardGroup>
        <Card>
          <Link to={"/api/theater"}>
            <Card.Img variant="top" src={theatreImage} />
            <Card.Body>
              <Card.Title>Pozorista</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to={"/api/performances"}>
            <Card.Img variant="top" src={performanceImage} />
            <Card.Body>
              <Card.Title>Predstave</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Card.Img variant="top" src={ticketImage} />
          <Card.Body>
            <Card.Title>Rezervacije</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}
