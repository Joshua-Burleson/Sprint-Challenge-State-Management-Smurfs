import React from 'react';
import { useDispatch } from 'react-redux';
import SmurfBox from './styles/SmurfBox';

const Smurf = (props) => {
    const dispatch = useDispatch();
    return(
        <SmurfBox onClick={() => dispatch({type: 'EDIT_SMURF', payload: {smurf: props.smurf}})}>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => dispatch({type: 'DELETE_SMURF', payload: {smurf: props.smurf}})}>Delete</button>
        </SmurfBox>
    );
};

export default Smurf;