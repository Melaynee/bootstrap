import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Searching from "./Searching.jsx";
import Categories from "./Categories.jsx";
import SideWidget from "./SideWidget.jsx";
import CardList from "./CardList.jsx";
import PaginationComponent from "./PaginationComponent.jsx";
function Content(){
    return (
        <Container className='mt-4'>
            <Row>
                <Col lg={8}>
                    <CardList />
                    <PaginationComponent />
                </Col>
                <Col lg={4}>
                    <Searching />
                    <Categories />
                    <SideWidget />
                </Col>
            </Row>
        </Container>
    )
}

export default Content;