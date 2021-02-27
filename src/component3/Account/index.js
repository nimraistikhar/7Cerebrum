import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Navbar'

const AccountStyle = styled.div`
     
`
const AccountPage = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
         justify-content: center;
     }

    .account-page {
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
        p {
            @media (max-width: 685px) {
                font-size: .9rem;
            }
            @media (max-width: 585px) {
                font-size: .8rem;
            }
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
                    }
                    input {
                        padding: .55rem .3rem;
                    }
                }
                .staight {
                    display: flex;
                    flex-direction: column;
                }
            }
            .detail-list-1 {
                margin-top: 1rem;
            }
            .info {
                display: flex;
                @media (max-width: 610px) {
                    flex-direction: column;
                }
                div {
                    display: flex;
                    flex-direction: column;
                    flex: 0 0 33.33333333%;
                    margin-bottom: .8rem;
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
                        @media (max-width: 900px) {
                            font-size: .8rem;
                        }
                    }
                    input {
                        padding: .55rem .3rem;
                        @media (max-width: 900px) {
                            font-size: .8rem;
                        }
                    }
                }
            }
        }
        .submit-save {
            width: 8%;
            height: 45px;
            font-size: .95rem;
            margin-top: .2rem;
            font-weight: 500;
            @media (max-width: 900px) {
                width: 12%;
            }
            @media (max-width: 543px) {
                width: 15%;
            }
            @media (max-width: 457px) {
                font-size: .8rem;
                height: 38px;
            }
            @media (max-width: 265px) {
                width: 20%;
            }
        }
        .submit-pass {
            width: 18%;
            height: 45px;
            font-size: .95rem;
            margin-top: .2rem;
            font-weight: 500;
            @media (max-width: 1047px) {
                width: 20%;
            }
            @media (max-width: 927px) {
                width: 22%;
            }
            @media (max-width: 840px) {
                font-size: .88rem;
                width: 25%;
            }
            @media (max-width: 768px) {
                margin-bottom: 2rem;
            }
            @media (max-width: 543px) {
                width: 30%;
            }
            @media (max-width: 457px) {
                font-size: .8rem;
                height: 38px;
                width: 35%;
            }
            @media (max-width: 358px) {
                width: 40%;
            }
            @media (max-width: 310px) {
                width: 45%;
            }
            @media (max-width: 272px) {
                width: 50%;
            }
        }
        .straight {
            position: relative;
            margin-top: .8rem;
            .fas {
                position: absolute;
                right: 1rem;
                @media (max-width: 610px) {
                    left: 34rem;
                }
                @media (max-width: 598px) {
                    left: 33rem;
                }
                @media (max-width: 581px) {
                    left: 32rem;
                }
                @media (max-width: 566px) {
                    left: 30.5rem;
                }
                @media (max-width: 540px) {
                    left: 29rem;
                }
                @media (max-width: 515px) {
                    left: 27.5rem;
                }
                @media (max-width: 487px) {
                    left: 26rem;
                }
                @media (max-width: 462px) {
                    left: 24.8rem;
                }
                @media (max-width: 442px) {
                    left: 23.5rem
                }
                @media (max-width: 420px) {
                    left: 22.5rem;
                }
                @media (max-width: 406px) {
                    left: 21.5rem;
                }
                @media (max-width: 389px) {
                    left: 20.5rem;
                }
                @media (max-width: 375px) {
                    left: 19.8rem;
                }
                @media (max-width: 361px) {
                    left: 19rem;
                }
                @media (max-width: 350px) {
                    left: 18.2rem;
                }
                @media (max-width: 332px) {
                    left: 17.2rem;
                }
                @media (max-width: 316px) {
                    left: 16.5rem;
                }
                @media (max-width: 303px) {
                    left: 15.8rem;
                }
                @media (max-width: 291px) {
                    left: 14.9rem;
                }
                @media (max-width: 275px) {
                    left: 14rem;
                }
                @media (max-width: 260px) {
                    left: 13rem;
                }
            }
            .fab {
                position: absolute;
                right: .3rem;
                @media (max-width: 610px) {
                    left: 34rem;
                }
                @media (max-width: 598px) {
                    left: 33rem;
                }
                @media (max-width: 581px) {
                    left: 32rem;
                }
                @media (max-width: 566px) {
                    left: 30.5rem;
                }
                @media (max-width: 540px) {
                    left: 29rem;
                }
                @media (max-width: 515px) {
                    left: 27.5rem;
                }
                @media (max-width: 487px) {
                    left: 26rem;
                }
                @media (max-width: 462px) {
                    left: 24.8rem;
                }
                @media (max-width: 442px) {
                    left: 23.5rem
                }
                @media (max-width: 420px) {
                    left: 22.5rem;
                }
                @media (max-width: 406px) {
                    left: 21.5rem;
                }
                @media (max-width: 389px) {
                    left: 20.5rem;
                }
                @media (max-width: 375px) {
                    left: 19.8rem;
                }
                @media (max-width: 361px) {
                    left: 19rem;
                }
                @media (max-width: 350px) {
                    left: 18.2rem;
                }
                @media (max-width: 332px) {
                    left: 17.2rem;
                }
                @media (max-width: 316px) {
                    left: 16.5rem;
                }
                @media (max-width: 303px) {
                    left: 15.8rem;
                }
                @media (max-width: 291px) {
                    left: 14.9rem;
                }
                @media (max-width: 275px) {
                    left: 14rem;
                }
                @media (max-width: 260px) {
                    left: 13rem;
                }
            }
        }
    }
`

export class Account extends Component {
    state = {
        isOldPasswordShown : false,
        isNewPasswordShown : false
    }

    toggleOldPasswordVisibility = () => {
        const {isOldPasswordShown} = this.state;
        this.setState({ isOldPasswordShown : !isOldPasswordShown}); 
    };
    toggleNewPasswordVisibility = () => {
        const {isNewPasswordShown} = this.state;
        this.setState({ isNewPasswordShown : !isNewPasswordShown}); 
    };

    render() {
        const { isOldPasswordShown } = this.state;
        const { isNewPasswordShown } = this.state;

        return (
            <AccountStyle>
                <AccountPage>
                 <Nav />
                     <div className="account-page">
                        <h2>Edit Account</h2>
                        <p>This information helps use reach out to you. Make sure you keep them up to date.</p>
                            <div className="detail">
                                <div>
                                    <form action="action_page.php" method="post">
                                    <div className="edit">
                                            <h4>My Account</h4>
                                            <div className="insert detail-list-1">
                                            <div>
                                           <label type="name"><b>Full Name</b></label>
                                           <input type="text" placeholder="funny 123" name="name" required />
                                    </div>
                                        <div>
                                           <label type="email"><b>Email</b></label>
                                           <input type="text" placeholder="me@imfunniee.com" name="email" required />
                                        </div>
                                            </div>

                                    </div>
                                    <div className="info">
                                    <div className="info-1">
                                        <label type="name"><b>City (optional)</b></label>
                                        <input type="text" placeholder="City" name="name" />
                                    </div>
                                    <div className="info-1">
                                        <label type="name"><b>State/Province (optional)</b></label>
                                        <input type="text" placeholder="State/Province" name="name" />
                                    </div>
                                    <div className="info-1">
                                        <label type="name"><b>Country (optional)</b></label>
                                        <input type="text" placeholder="Country" name="name" />
                                    </div>
                                </div>


                                    <div className="info">
                                    <div className="info-1">
                                        <label type="name"><b>Job Title (optional)</b></label>
                                        <input type="text" placeholder="Job Title" name="name" />
                                    </div>
                                    <div className="info-1">
                                        <label type="name"><b>Company (optional)</b></label>
                                        <input type="text" placeholder="Job Title" name="name" />
                                    </div>
                                    <div className="info-1">
                                        <label type="name"><b>Website (optional)</b></label>
                                        <input type="url" placeholder="Website" name="name" />
                                    </div>
                                </div>
                                    <input className="submit submit-save" type="submit" value="Save" />
                                    </form>
                                    </div>
                                
                                    <form>
                                    <div>
                                    <h4>Change Password</h4>
                                    <div className="insert">
                                        <div className="straight">
                                            <label type="atype"><b>Old Password</b></label>
                                            <div className="fas">
                                                <i className={`fa ${isOldPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                                                onClick={this.toggleOldPasswordVisibility}
                                                />
                                            </div>
                                            <input type={(isOldPasswordShown) ? "text" : "password"} placeholder="Old Password" name="psw" className="password" required />
                                        </div>
                                        <div className="straight">
                                            <label type="cart"><b>New Password</b></label>
                                            <div className="fab">
                                                <i className={`fa ${isNewPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                                                onClick={this.toggleNewPasswordVisibility}
                                                />
                                            </div>
                                            <input type={(isNewPasswordShown) ? "text" : "password"} placeholder="New Password" name="psw" className="password" required />
                                        </div>
                                    </div>
                                </div>
                                    <input className="submit submit-pass" type="submit" value="Change Password" />
                                </form>

                            </div>
                            
                     </div>
             </AccountPage>
            </AccountStyle>
        )
    }
}

export default Account
