import styled from 'styled-components';
export const Button = styled.button`
  
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #000000;
  color: #24feee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-left: 5rem;
  

  &:hover {
    background-color: #2e3737;  
  }
  &:focus {
    outline: none;
    
    box-shadow: 0 0 3px rgba(39, 43, 48, 0.5);
  }
  
  &:active {
    background-color: #004187;   
  }
`;

