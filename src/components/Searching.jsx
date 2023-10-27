import {Button, Card, CardBody, CardHeader, FormControl, InputGroup} from "react-bootstrap";

function Searching() {
    return (
            <Card className='mb-4'>
                <CardHeader>Search</CardHeader>
                <CardBody>
                    <InputGroup>
                        <FormControl placeholder='Enter search term...'></FormControl>
                        <Button>Go!</Button>
                    </InputGroup>
                </CardBody>
            </Card>
    )
}

export default Searching