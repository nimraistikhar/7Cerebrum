import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'

const TeamStyle = styled.div`
     
`
const TeamPage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .team-page {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin-left: .8rem;
        @media (max-width: 768px) {
            width: 99%;
        }
        h2 {
            margin-top: .7rem;
            font-size: 1.65rem;
        }
        p {
            font-size: .95rem;
            margin-top: .1rem;
        }
    }
`

function Team() {
    return (
        <TeamStyle>
             <TeamPage>
                 <Nav/>
                <div className="team-page">
                  <h2>Team</h2>
                  <p>These are the people that makes everything run seamlessly.</p>
                 </div>

             </TeamPage>
        </TeamStyle>
    )
}

export default Team
