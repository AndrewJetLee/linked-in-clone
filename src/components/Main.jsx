import styled from 'styled-components';
import Post from './Post';
import ArticleCard from './ArticleCard';
import PostModal from './PostModal';


export const Main = () => {
    return (
        <Container>
            <Post />
            <ArticleCard />
            <PostModal />
        </Container>
        
    )
}

const Container = styled.div`
    grid-area: Main; 
`


