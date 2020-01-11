import styled from 'styled-components';

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 25vh;
    width: 40vw;
    padding: 10px;
    input[type="text"], input[type="number"]{
        width: 45%;
        height: 12%;
    }
    input[type="submit"]{
        margin-top: 12.5px;
        height: 12%;
        width: 33%;
    }
`;