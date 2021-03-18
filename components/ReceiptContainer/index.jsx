import styled from 'styled-components'

export const ReceiptContainer = styled.div`
  background-color: #5a6b86;
  width: 30%;
  height: 45%;
  margin: 0 auto;
  color: white;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b;
  ul {
    list-style: none;
    display: block;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
    border: 2px dashed white;
    border-radius: 6px;
    padding: 20px;
    max-height: 40%;
    min-height: 40%;
    font-size: 1.4rem;
    font-family: sans-serif;
    overflow-y: auto;

    p {
      margin-top: 100%;
    }
    li {
      color: white;
      margin-bottom: 5%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
