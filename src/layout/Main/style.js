import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: transparent;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 80%;
`;

export const Container = styled.div`
  border: 1px solid #ddd;
  display: grid;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  padding: 0 20px;
  width: 100%;
  grid-template-columns: 15% 5% 15% 20% 10%;
`;

export const Title = styled.h1`
  span:nth-child(1) {
    color: steelblue;
  }
  span:nth-child(2) {
    color: greenyellow;
  }
  span:nth-child(3) {
    color: yellow;
  }
  span:nth-child(4) {
    color: red;
  }
  font-size: 60px;
  margin: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  margin-top: 15px;
`;

export const Suggestion = styled.div`
  display: flex;
  position: relative;
  border: black 2px solid;
  padding: 0.5em;
  margin: 0.5em 0;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

export const SearchResult = styled.div`
  margin-top: 2em;
`;

export const SearchResultItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1em 0;
`;

