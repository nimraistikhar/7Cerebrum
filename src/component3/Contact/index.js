import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'

const ContactStyle = styled.div`
     
`
const ContactPage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .contact-page {
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
            margin-bottom: -.8rem;
            font-size: .95rem;
            @media (max-width: 685px) {
                font-size: .9rem;
            }
            @media (max-width: 585px) {
                font-size: .8rem;
            }
        }
        .contact-area {
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
            .contact-list {
                display: flex;
                @media (max-width: 600px) {
                    flex-direction: column;
                }
                input {
                    flex: 0 0 49.2%;
                    padding: .55rem .3rem;
                    margin: .9rem 0;
                
                    :not(:first-of-type) {
                        margin-left: 1rem;
                        margin-left: .9rem;
                        @media (max-width: 1185px) {
                            margin-left: .7rem;
                        }
                        @media (max-width: 890px) {
                            margin-left: .5rem;
                        }
                        @media (max-width: 717px) {
                            margin-left: .3rem;
                        }
                        @media (max-width: 600px) {
                            margin: 0;
                        }
                    }
                }
            }
            textarea {
                height: 120px;
                border-radius: 5px;
                padding: .5rem .5rem;
                @media (max-width: 600px) {
                    margin-top: 1rem;
                }
            }

            .submit {
                margin-top: 1rem;
                width: 15%;
                font-weight: 600;
                font-size: .95rem;
                @media (max-width: 1050px) {
                    width: 20%;
                }
                @media (max-width: 830px) {
                    width: 23%;
                    height: 40px;
                }
                @media (max-width: 550px) {
                    width: 25%;
                }
                @media (max-width: 480px) {
                    width: 28%;
                }
                @media (max-width: 445px) {
                    width: 32%;
                }
                @media (max-width: 390px) {
                    width: 36%;
                }
                @media (max-width: 335px) {
                    width: 40%;
                }
                @media (max-width: 300px) {
                    width: 47%;
                }
            }
        }
    }
`

function Contact() {
    return (
        <ContactStyle>
             <ContactPage>
                 <Nav/>
                <div className="contact-page">
                    <h2>Contact Us</h2>
                    <p>Contact us in case you got any query or just hit up on socials.</p>
                    <form action="action_page.php" method="post">
                        <div className="contact-area">
                            <div className="contact-list">
                                <input type="text" placeholder="Full Name" name="uname" required />
                                <input type="text" placeholder="Email" name="email" required />
                            </div>
                            <textarea id="subject" name="subject" placeholder="Message" required></textarea>

                            <input className="submit" type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>

             </ContactPage>
        </ContactStyle>
    )
}

export default Contact
