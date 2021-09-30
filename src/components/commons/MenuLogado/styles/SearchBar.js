import styled from 'styled-components';

const SearchBar = styled.input`
  height: 44px;
  border: 1px solid ${({ theme }) => theme.primary.color}; 
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default SearchBar;
