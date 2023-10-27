import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "react-bootstrap";

function CardDefault({text}){
    return (
        <>
            <Card className='mb-4'>
                <CardImg variant="top" src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' />
                <CardBody>
                    <CardSubtitle className='small text-muted'>January 1, 2023</CardSubtitle>
                    <CardTitle as='h2' >Featured Post Title</CardTitle>
                    <CardText>{text || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.'}</CardText>
                    <Button>Read more →</Button>
                </CardBody>
            </Card>
        </>
    )
}

export default CardDefault