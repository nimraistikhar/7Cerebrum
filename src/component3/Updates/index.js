import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'
import { BsDot } from 'react-icons/bs'

const UpdateStyle = styled.div`
     
`
const UpdatePage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .update-page {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        @media (max-width: 768px) {
            width: 99%;
        }
        .update-heading {
            h1 {
                margin-top: 1rem;
                font-size: 1.7rem;
            }
            p {
                @media (max-width: 430px) {
                    font-size: .9rem;
                    font-weight: 500;
                }
                @media (max-width: 375px) {
                    font-size: .8rem;
                }
                @media (max-width: 335px) {
                    font-size: .75rem;
                }
                @media (max-width: 300px) {
                    font-size: .7rem;
                }
                @media (max-width: 275px) {
                    font-size: .65rem;
                }
                @media (max-width: 255px) {
                    font-size: .6rem;
                }
            }
        }


        .Message {
            margin-top: 1rem;
            p {
                font-size: 1rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                margin-bottom: .7rem;
                .span {
                    font-size: 2rem;
                    margin: 0 -.3rem;
                }
            }
            p:not(:last-of-type) {
                font-size: 1.15rem;
                font-weight: 600;
            }
        }
     }
`

function Updates() {
    return (
        <UpdateStyle>
             <UpdatePage>
                 <Nav/>
                 <div className="update-page">
                     <div className="update-heading">
                        <h1>Updates</h1>
                        <p>Updates to messages you sending form join us.</p>
                     </div>
                     <div className="Message">
                        <p>Updates <BsDot className="span"/> 0</p>
                        <p>No updates to show here yet.</p>
                     </div>
                 </div>

             </UpdatePage>
        </UpdateStyle>
    )
}

export default Updates
