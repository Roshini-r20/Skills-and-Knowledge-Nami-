import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
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
              <CardLink>
                <Link href={`/post?id=${id}`} as={`/post/${id}`}>
                  <a>View Details</a>
                </Link>
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
);
// export default class Post extends React.Component {
//   render() {
//     return (

//     );
//   }
// }
export default Post;
