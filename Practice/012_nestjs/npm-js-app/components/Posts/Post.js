import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const Post = ({ id, title, text, description }) => (
  <Container>
    <Row>
      <Col>
        <div>
          <Card>
            <CardBody>
              <CardTitle>
                <h2>{title}</h2>
              </CardTitle>
              <CardSubtitle>{description}</CardSubtitle>
            </CardBody>
            <CardBody>
              <CardLink href="#">View Details</CardLink>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
);
export default Post;
