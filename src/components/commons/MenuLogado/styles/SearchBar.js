import styled from 'styled-components';

export const SearchBar = styled.div`
  height: 44px;
  width: 288px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.tertiary.color}; 
  border-radius: 12px;
  margin: 0 52px;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.background.contrastText}; 
`;
