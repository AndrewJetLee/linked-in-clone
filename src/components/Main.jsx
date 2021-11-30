import styled from 'styled-components';
import Post from './Post';
import ArticleCard from './ArticleCard';
import PostModal from './PostModal';


export const Main = ({user, dispatch}) => {
    return (
        <Container>
            <Post />
            <ArticleCard />
            <PostModal user={user} dispatch={dispatch}/>
        </Container>
        
    )
}

const Container = styled.div`
    grid-area: Main; 
`


