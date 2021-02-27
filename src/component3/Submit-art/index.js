import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'

const SubmitStyle = styled.div`
     
`
const SubmitPage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .submit-page {
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
            margin-top: .7rem;
            font-size: 1.5rem;
        }
        .detail {
            h4 {
                font-size: 1.15rem;
                margin-top: .8rem;
            }
            .insert {
                display: flex;
                @media (max-width: 610px) {
                    flex-direction: column;
                }
                div {
                    display: flex;
                    flex-direction: column;
                    flex: 0 0 50%;
                    margin-bottom: .8rem;
                    @media (max-width: 610px) {
                        width: 99%;
                    }
                    @media (max-width: 405px) {
                        width: 98%;
                    }
                    :not(:last-of-type) {
                        padding-right: .7rem;
                        @media (max-width: 610px) {
                            padding: 0;
                        }
                    }
                    label {
                        font-size: .95rem;
                        font-weight: 400;
                        margin-bottom: .3rem;
                        @media (max-width: 405px) {
                            font-weight: 400;
                        }
                    }
                    input {
                        padding: .55rem .3rem;
                        @media (max-width: 405px) {
                            font-weight: 400;
                        }
                    }
                    select {
                        height: 47px;
                    }
                }
            }
            .detail-list-1 {
                margin-top: 1rem;
            }
        }
        .submit {
            width: 13%;
            height: 45px;
            font-size: .95rem;
            margin-top: .2rem;
            font-weight: 500;
            @media (max-width: 985px) {
                width: 15%;
            }
            @media (max-width: 885px) {
                width: 20%;
            }
            @media (max-width: 768px) {
                margin-bottom: 2.5rem;
            }
            @media (max-width: 520px) {
                width: 22%;
                font-size: .88rem;
            }
            @media (max-width: 435px) {
                width: 25%;
            }
            @media (max-width: 378px) {
                height: 38px;
            }
            @media (max-width: 346px) {
                width: 28%;
            }
            @media (max-width: 300px) {
                width: 30%;
            }
            @media (max-width: 280px) {
                font-size: .75rem;
            }
            @media (max-width: 240px) {
                width: 32%;
            }
        }
    }
`

function Submit() {
    return (
        <SubmitStyle>


            <SubmitPage>
                 <Nav/>
                <div className="submit-page">
                    <h2>Submit Art</h2>

                    <form action="action_page.php" method="post">
                    <div className="detail">
                        <h4>Details</h4>
                        <div className="insert detail-list-1">
                            <div>
                               <label type="aname"><b>Artist Name</b></label>
                               <input type="text" placeholder="Artist Name" name="aname" required />
                            </div>
                            <div>
                               <label type="atitle"><b>Art Title</b></label>
                               <input type="text" placeholder="Art Title" name="atitle" required />
                            </div>
                        </div>
                        <div className="insert">
                            <div>
                               <label type="atype"><b>Art Type</b></label>
                               <select id="Music" name="Music" required>
                                  <option value="Acoustic">Illustration</option>
                                  <option value="Acoustic">Illustration</option>
                                  <option value="Acoustic">Illustration</option>
                                </select>
                            </div>
                            <div>
                               <label type="cart"><b>Choose Art</b></label>
                               <input type="text" placeholder="Click here to Choose File (1920*1080px)" name="achoose" required />
                            </div>
                        </div>
                    </div>                    

                    <div className="detail">
                        <h4>Socials</h4>
                        <div className="insert detail-list-1">
                            <div>
                               <label type="uname"><b>Spotify(optional)</b></label>
                               <input type="url" placeholder="https://open.spotify.com/artist/abc" name="link" />
                            </div>
                            <div>
                               <label type="uname"><b>Soundcloud (optional)</b></label>
                               <input type="url" placeholder="https://soundcloud.com/abc" name="atitle" />
                            </div>
                        </div>
                        <div className="insert">
                            <div>
                               <label type="uname"><b>Twitter (optional)</b></label>
                               <input type="text" placeholder="Twitter Username" name="Twitter" />
                            </div>
                            <div>
                               <label type="uname"><b>Instagram (optional)</b></label>
                               <input type="text" placeholder="Instagram Username" name="Instagram" />
                            </div>
                        </div>
                        <div className="insert">
                            <div>
                               <label type="uname"><b>YouTube (optional</b></label>
                               <input type="url" placeholder="https://youtube.com/channel/abc" name="youtube" />
                            </div>
                            <div>
                               <label type="uname"><b>Website (optional)</b></label>
                               <input type="url" placeholder="https://yourwebsite.com" name="web" />
                            </div>
                        </div>
                    </div>
                    <input className="submit" type="submit" value="Submit Art" />
                    </form>
                 </div>

             </SubmitPage>
        </SubmitStyle>
    )
}

export default Submit
