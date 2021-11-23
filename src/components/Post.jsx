import React from 'react'
import styled from 'styled-components';

const Post = () => {
    return (
        <Container>
            <PostCard>
                <Top>
                    <img src="/images/user.svg" alt="" />
                    <button>Start a post</button>
                </Top>
                <Bottom>
                    <Photo>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                    </Photo>
                    <Video>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>Video</span>
                    </Video>
                    <Event>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>Video</span>
                    </Event>
                    <Article>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>Write Article</span>
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
    min-width: 80%;
    min-height: 130px; 
    display: flex; 
    justify-content: center; 
`

const PostCard = styled.div`
    padding-top: 3px; 
    display: flex;
    height: 120px;
    width: 100%; 
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
    button {
        width: 100%; 
        font-size: 14px; 
        font-weight: 600; 
        height: 50px; 
        padding: 10px 8px 10px 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        color: rgba(0, 0, 0, 0.45);
        border-radius: 30px;
        margin: 10px 12px; 
        background-color: white;
        text-align: left; 
        cursor: pointer; 
        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
        
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
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    background-clip: border-box;
    cursor: pointer; 
    img {
        height: 24px; 
         
    }
    span {
        margin-left: 8px;
        color: rgba(0, 0, 0, 0.6);
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.08)
    }
`

const Video = styled(Photo)`
`

const Event = styled(Photo)``

const Article = styled(Photo)``



