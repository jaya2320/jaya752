import { createTheme } from '@mui/material'

const theme = createTheme({

    typography: {
        h1: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            opacity: ".4",
            color: "#ddd",
            fontWeight: "900",
            lineHeight: "1.2",
            fontSize:"5.4rem",
            '@media (max-width: 600px)': {
                    fontSize:"2.4rem"
                  },
        },
        h2: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "2.5rem",
            fontWeight: "800",
            textDecorationLine: "underline",
            textDecorationColor: "#20C997",
            textUnderlineOffset: "20px",
            color: "#121212",
            lineHeight: "1.2",
            '@media (max-width: 600px)': {
                    fontSize:"1.7rem"
                  },
        },
        h3:{
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "1.8rem",
            fontWeight: "800",
            color: "#121212",
            lineHeight: "2.5",
        
            '@media (max-width: 600px)': {
                    fontSize:"1.4rem"
                  },
        },
        h4: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "1.3rem!important",
            color: "#252b33",
            fontWeight: "600!important",
            lineHeight: "1.2",
            '@media (max-width: 600px)': {
                    fontSize:"1.23rem!important"
                  },
        },
        h5: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "16px",
            color: "#DC3545",
            fontWeight: "500!important",
            lineHeight: "2.5",
            '@media (max-width: 600px)': {
                    fontSize:"1.04rem"
                  },
        },
        h6: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "1rem!important",
            color: "#252b33",
            lineHeight: "1.2",
            fontWeight:"600",
            '@media (max-width: 600px)': {
                fontSize:"0.9rem!important",
              },
        },
        body: {
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '0.2em',
            fontSize: "1rem!important",
            color: "#252b33",
            fontWeight: "500!important",
            '@media (max-width: 600px)': {
                fontSize:"0.8rem!important",
                lineHeight:"0.5"
              },
        }
    },
})

export default theme;
