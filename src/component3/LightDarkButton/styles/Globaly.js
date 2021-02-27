import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.font};
        transition: all .5s linear;
    }
    .gc {
        color: ${({ theme }) => theme.gcp};
    }
    .gc:hover {
        color: ${({ theme }) => theme.font};
    }
    .gcb:hover {
        background: ${({ theme }) => theme.gcbp};
        color: ${({ theme }) => theme.font};
        @media (max-width: 768px) {
            background-color: transparent;
        }
    }
    .gc-mod {
        color: ${({ theme }) => theme.gcp};
    }
    .gc-mod:hover {
        color: ${({ theme }) => theme.font};
    }
    .mod:hover {
        background: ${({ theme }) => theme.gcbp};
        @media (max-width: 768px) {
            background-color: transparent;
        }
    }
    .li-icon {
        color: ${({ theme }) => theme.font};
    }
    ul {
        background-color: ${({theme}) => theme.body};
        transition: all .5s linear;
    }
    .sigb {
        background-color: ${({theme}) => theme.gcbp};
    }
    .sigc {
        color: ${({ theme }) => theme.font};
    }
    .desc {
        border: 1px solid ${({theme}) => theme.bord};
    }
    .main-navy {
        border-right: 1px solid ${({theme}) => theme.bord};
    }
    .btnb {
        border: 1px solid ${({theme}) => theme.font};
        transition: 0.2s ease-in-out;
    }
    .btnb a {
        color: ${({ theme }) => theme.font};
        transition: 0.2s ease-in-out;
    }
    .btnb a:hover {
        color: ${({ theme }) => theme.body};
    }
    .btnb:hover {
        background-color: ${({theme}) => theme.font};
    }
    .btnr {
        border: 1px solid #ff471a;
        transition: 0.2s ease-in-out;
    }
    .btnr:hover {
        background-color: #ff471a;
    }
    .btnr a {
        color: #ff471a;
    }
    .btnr a:hover {
        color: #212121;
    }
    .Email input {
        background-color: ${({theme}) => theme.body};
        border: 1px solid ${({theme}) => theme.bord};
    }
    .selected {
        color: ${({ theme }) => theme.font};
    }

    input {
        border: 1px solid ${({theme}) => theme.bord};
        border-radius: 5px;
        background-color: ${({theme}) => theme.body};
        padding: .55rem .3rem;
        height: 47px;

        ::placeholder {
            color: ${({ theme }) => theme.placehold};
            font-weight: 600;
        }
    }
    select {
        border: 1px solid ${({theme}) => theme.bord};
        background-color: ${({theme}) => theme.body};
        color: ${({ theme }) => theme.font};
        font-weight: 600;
        padding: .55rem .3rem;
        border-radius: 5px;
        height: 47px;
        
    }
    label {
        color: ${({ theme }) => theme.gcp};
    }
    textarea {
        border: 1px solid ${({theme}) => theme.bord};
        background-color: ${({theme}) => theme.body};
        border-radius: 5px;
        ::placeholder {
            color: ${({ theme }) => theme.placehold};
            font-weight: 600;
        }
    }
    p {
        color: ${({ theme }) => theme.gcp};
        font-weight: 600;
    }
    .Message {
        p {
            color: ${({ theme }) => theme.font};
        }
    }
    .submit {
        border: 1px solid ${({theme}) => theme.font};
        background-color: ${({theme}) => theme.body};
        color: ${({ theme }) => theme.font};
        transition: 0.2s ease-in-out;
        :hover {
            color: ${({ theme }) => theme.body};
            background-color: ${({theme}) => theme.font};
        }
    }
    .shown {
        .navigation-nav {
            background-color: ${({theme}) => theme.body};
        }
    }
    .active {
        color: ${({ theme }) => theme.font};
    }
` 

export const lightTheme = {
    body: '#fff',
    font: '#121212',
    gcp: '#b0b0b0',
    gcbp: '#eee',
    placehold: '#808080',
    bord: '#e2e2e2',
};

export const darkTheme = {
    body: '#121212',
    font: '#fff',
    gcp: '#8f8e8ee5',
    gcbp: '#8080803d',
    placehold: '#8f8e8e',
    bord: '#8080803d',
}