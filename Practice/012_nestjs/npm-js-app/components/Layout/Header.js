import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Link from 'next/link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link href="/">
            <NavbarBrand style={{ cursor: 'pointer' }}> NewsApp </NavbarBrand>
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about" passHref>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* <img src="/static/house.jpg" /> */}
      </div>
    );
  }
}
