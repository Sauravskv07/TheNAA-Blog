import React from 'react';
import Link from 'next/link'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const NoMatch = () => {
    return (
        <React.Fragment>
            <Container className="my-5">
                <h1>404 No Match Found</h1>          
                    <Link href='/'>
                       <Button>Take Me Back</Button>
                    </Link>
            </Container>
        </React.Fragment>
    )

}

export default NoMatch;