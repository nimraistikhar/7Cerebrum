import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'

const JoinStyle = styled.div`
     
`
const JoinPage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .join-page {
        width: 85%;
        display: flex;
        flex-direction: column;
        flex: 0 0 67%;
        margin-left: .8rem;
        @media (max-width: 1300px) {
            flex: 0 0 70%;
        }
        @media (max-width: 1275px) {
            flex: 0 0 75%;
        }
        @media (max-width: 996px) {
            flex: 0 0 75%;
        }
        @media (max-width: 900px) {
            margin-left: .5rem;
        }
        @media (max-width: 827px) {
            flex: 0 0 70%;
        }
        @media (max-width: 768px) {
            width: 95%;
        }
        h2 {
            font-size: 1.6rem;
            margin-top: 1rem;
        }
        p {
            font-size: .95rem;
            margin-bottom: .5rem;
            @media (max-width: 685px) {
                font-size: .9rem;
            }
            @media (max-width: 585px) {
                font-size: .8rem;
            }
        }
        .insert {
            display: flex;
            @media (max-width: 600px) {
                flex-direction: column;
            }
            input {
                flex: 0 0 49.2%;
                padding: .55rem .3rem;
                margin: .5rem 0;
                :not(:first-of-type) {
                    margin-left: .9rem;
                    @media (max-width: 1185px) {
                        margin-left: .7rem;
                    }
                    @media (max-width: 717px) {
                        margin-left: .5rem;
                    }
                    @media (max-width: 600px) {
                        margin: 0;
                    }
                }
            }
        }
        .insert-media {
            display: flex;
            flex-direction: column;
            input {
                height: 70px;
                padding-bottom: 1.5rem;
                margin: .55rem 0;
            }
        }
        .submit {
            width: 10%;
            height: 45px;
            font-size: .95rem;
            margin-top: .2rem;
            font-weight: 500;
            @media (max-width: 905px) {
                width: 15%;
            }
            @media (max-width: 515px) {
                width: 18%;
                height: 40px;
            }
            @media (max-width: 400px) {
                width: 22%;
            }
            @media (max-width: 315px) {
                width: 28%;
            }
            @media (max-width: 244px) {
                width: 32%;
            }
        }
    }
`

function Join() {
    return (
        <JoinStyle>
             <JoinPage>
                 <Nav/>
                <div className="join-page">
                    <h2>Join Us</h2>
                    <p>Join us to change the way people hear music.</p>
                    <form action="action_page.php" method="post">
                        <div className="insert">
                            <input type="text" placeholder="Name" name="aname" required />
                            <input type="text" placeholder="Email" name="aname" required />
                        </div>
                        <div className="insert">
                            <input type="text" placeholder="Age" name="aname" required />
                            <input type="text" placeholder="Location" name="aname" required />
                        </div>
                        <div className="insert-media">
                            <input type="text" placeholder="Social Media Handles (eg. twitter.com/abc, instagram.com/abc" name="aname" required />
                            <input type="text" placeholder="What makes you passionate about 7Cerebrum?" name="aname" required />
                            <input type="text" placeholder="Tell us a little bit about yourself and what can you help us with?" name="aname" required />
                        </div>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>

             </JoinPage>
        </JoinStyle>
    )
}

export default Join
