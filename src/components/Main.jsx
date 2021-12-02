import styled from 'styled-components';
import Post from './Post';
import ArticleCard from './ArticleCard';



export const Main = ({user, dispatch}) => {
    return (
        <Container>
            <Post user={user} dispatch={dispatch}/>
            <ArticleCard />
        </Container>
        
    )
}

const Container = styled.div`
    grid-area: Main; 
`


