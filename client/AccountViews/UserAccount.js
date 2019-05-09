import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import OrdersPanel from "./OrdersPanel";
import ReviewsPanel from "./ReviewsPanel";
import CreditCardsPanel from "./CreditCardsPanel";

class UserAccount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, orders, reviews } = this.props;

    console.log("reviews in userAccount", reviews);

    if (user) {
      return (
        <Accordion>
          <Card>
            <Card.Header
              style={{ backgroundColor: "#f46854" }}
              className="text-white"
            >
              User Account
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>{user.name}</Col>
              </Row>
              <Row>
                <Col>{user.email}</Col>
              </Row>
              <Row>
                <Col>
                  <small className="text-center">
                    registered user since {user.createdAt.slice(0, 10)}
                  </small>
                </Col>
              </Row>
              <hr />

              <OrdersPanel orders={orders} />
              <ReviewsPanel reviews={reviews} user={user} />
              <CreditCardsPanel />
            </Card.Body>
          </Card>
        </Accordion>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = ({ products, user, orders, reviews }) => {
  return {
    products,
    user,
    orders,
    reviews
  };
};

export default connect(mapStateToProps)(UserAccount);