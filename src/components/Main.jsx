import styled from 'styled-components';
import Post from './Post';

export const Main = () => {
    return (
        <Container>
            <Post />
        </Container>
    )
}

const Container = styled.div`
    grid-area: Main; 
`


