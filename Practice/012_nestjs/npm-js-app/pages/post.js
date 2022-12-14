import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import fetch from 'isomorphic-unfetch';

class Post extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const respose = await fetch(`${process.env.API_URL}/posts/${id}`);
    const post = await respose.json();
    return { post };
  }
  render() {
    const { title, description, text } = this.props.post;
    return (
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
                  <p>{text}</p>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Post;
