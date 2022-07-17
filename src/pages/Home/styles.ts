import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8dfe2;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: #A24F41;
    font-weight: 400;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
    color: #A24F41;
    font-weight: 400;
  }

  img {
    width: 25%;
    border-radius: 10px;
    border: 2px solid #A24F41;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-around;
  }

  h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 2.7rem;
    color: #A24F41;
    font-weight: 400;
    margin-top: 50px;
  }

  a {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3rem;
    color: #A24F41;
  }

  @media (max-width: 738px) {
    height: 94vh;

    img {
      width: 60%;
    }
  }
`;
