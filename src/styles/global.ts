import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  button, input {
    background: 0;
    border: 0;
    color: white;
  } 

  :root {
    --dark-blue: #084154;
    --blue: #3EC6E0;
    --silver: #EBEBEB;
  }
`
