import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "react-bootstrap";

function MainCard(){
    return (
        <>
            <Card className='mb-4'>
                <CardImg variant="top" src='https://dummyimage.com/850x350/dee2e6/6c757d.jpg' />
                <CardBody>
                    <CardSubtitle className='small text-muted'>January 1, 2023</CardSubtitle>
                    <CardTitle as='h2' >Featured Post Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</CardText>
                    <Button>Read more →</Button>
                </CardBody>
            </Card>
        </>
    )
}

export default MainCard