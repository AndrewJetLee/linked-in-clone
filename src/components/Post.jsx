import React from 'react'
import styled from 'styled-components';

const Post = () => {
    return (
        <Container>
            <PostCard>
                <Top>
                    <img src="/images/user.svg" alt="" />
                    <a>Start a post</a>
                </Top>
                <Bottom>
                    <Photo>
                        <img src="/images/photo.svg" alt="" />
                        <span>Photo</span>
                    </Photo>
                    <Video>
                        <img src="/images/photo.svg" alt="" />
                        <span>Video</span>
                    </Video>
                    <Event>
                        <img src="/images/photo.svg" alt="" />
                        <span>Video</span>
                    </Event>
                    <Article>
                        <img src="/images/photo.svg" alt="" />
                        <span>Video</span>
                    </Article>
                </Bottom>
            </PostCard>
        </Container>
    )
}

export default Post

const Container = styled.div`
    border-radius: 5px;
    position: relative;
    border: dotted; 
    min-width: 100%;
    min-height: 130px; 
`

const PostCard = styled.div`
    display: flex;
    height: 110px;
    
    flex-direction: column; 
    background-color: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
`
const Top = styled.div`
    display: flex; 
    align-items: center;
    margin: 0;
    overflow: hidden; 
    img {
        margin-left: 15px; 
        height: 45px;
        border-radius: 50%;
    }
    a {
        width: 100%; 
        height: 45px; 
        padding: 10px 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 30px;
        margin: 10px 12px; 
        
    }
`
const Bottom = styled.div`
    display: flex; 
    justify-content: space-around; 
`

const Photo = styled.a`
    display: flex;
    align-items: center;
    padding: 10px; 
    img {
        height: 30px; 
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.2)
    }
`

const Video = styled(Photo)`
`

const Event = styled(Photo)``

const Article = styled(Photo)``



