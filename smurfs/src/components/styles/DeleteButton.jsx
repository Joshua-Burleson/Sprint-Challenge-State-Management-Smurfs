import styled from 'styled-components';

export default styled.button`
    align-self: flex-end;
    height: 30px;
    width: 30px;
    padding-bottom: 10px;
    padding-top: 3px;
    font-size: 1.25rem;
    border: 1px solid black;
    background: red;
    color: white;

    &:hover{
        cursor: pointer;
    }
`;