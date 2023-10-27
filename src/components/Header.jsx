import Container from "react-bootstrap/Container";

function Header() {
    return (
        <div className='py-5 border-bottom'>
            <Container>
                <div className='text-center my-5'>
                    <h1 className='fw-bold'>Welcome to React-Bootstrap page!</h1>
                    <p className='lead'>This site was made by react + bootstrap + vite</p>
                </div>
            </Container>

        </div>
    )
}

export default Header;