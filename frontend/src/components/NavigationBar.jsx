import { useTranslation } from "react-i18next";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('login');
  };
 
  const isAuth = localStorage.getItem('token') !== null ? true : false;

  return (
    <Navbar bg="white" expand="lg" className ="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t('navbar.title')}
        </Navbar.Brand>
        {
          isAuth &&
          <Button variant="primary" onClick={logOut}>
            {t('navbar.button')}
          </Button>
        }
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
 