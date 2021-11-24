import styled from 'styled-components';
import Post from './Post';
import ArticleCard from './ArticleCard';

export const Main = () => {
    return (
        <Container>
            <Post />
            <ArticleCard />
        </Container>
    )
}

const Container = styled.div`
    grid-area: Main; 
`


