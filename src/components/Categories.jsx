import {Card, CardBody, CardHeader } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Categories() {
    return (
        <Card className='mb-4'>
            <CardHeader>Categories</CardHeader>
            <CardBody>
                <Row>
                    <Col sm={6}>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="#!">Web Design</a></li>
                            <li><a href="#!">HTML</a></li>
                            <li><a href="#!">Freebies</a></li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="#!">Java Script</a></li>
                            <li><a href="#!">CSS</a></li>
                            <li><a href="#!">Tutorials</a></li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Categories