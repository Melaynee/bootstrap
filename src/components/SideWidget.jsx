import {Card, CardBody, CardHeader} from "react-bootstrap";

function SideWidget() {
    return (
        <Card className='mb-4'>
            <CardHeader>Side Widget</CardHeader>
            <CardBody>
                You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
            </CardBody>
        </Card>
    )
}

export default SideWidget;