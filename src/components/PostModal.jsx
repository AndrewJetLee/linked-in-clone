import styled from 'styled-components';


const PostModal = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="/images/close-icon.svg" alt="" />
                    </button>
                </Header>
                <PostContent>
                    <UserInfo>
                        <div>
                            <img src="/images/user.svg" alt="" />
                        </div>
                        <div>
                            <span>Andrew Lee</span>
                            <button>
                                <img src="/images/globe.svg" alt="" />
                                <span>Anyone</span>
                                <img src="/images/down-icon.svg" alt="" />
                            </button>
                        </div>
                    </UserInfo>
                </PostContent>
            </Content>
        </Container>
    )
}

export default PostModal

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0; 
    height: 100vh;
    width: 100vw; 
    z-index: 10000; 
    background-color: rgba(0, 0, 0, 0.8);
`
const Content = styled.div`
    width: 552px; 
    margin-left: auto; 
    margin-right: auto; 
    background-color: white;
    max-height: 90%;
    border-radius: 5px;
    display: flex; 
    flex-direction: column; 
    position: relative;
    top: 32px; 

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        border-radius: 50%; 
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
        
    }
`

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 12px;


`

const UserInfo = styled.div`
    display: flex; 
    align-items: center;
    padding: 12px 24px; 
    div:first-child {
        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }
    div:last-child {
        padding-left: 4px;
        margin-left: 4px; 
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        
        button {
            display: flex;
            justify-content: center;
            align-items: center; 
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 20px; 
            img {
                width: 16px;
                height: 16px; 
            }
        }
    }
`