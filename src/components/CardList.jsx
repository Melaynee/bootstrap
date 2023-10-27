import MainCard from "./MainCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDefault from "./CardDefault.jsx";

function CardList(){
    const anotherText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.'
    return (
        <div className='mb-4 border-bottom'>
            <MainCard />
            <Row>
                <Col>
                    <CardDefault />
                    <CardDefault />
                </Col>
                <Col>
                    <CardDefault />
                    <CardDefault text={anotherText} />
                </Col>
            </Row>
        </div>
    )
}

export default CardList