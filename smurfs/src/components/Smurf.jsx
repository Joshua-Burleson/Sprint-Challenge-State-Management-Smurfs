import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteSmurf } from '../actions/SmurfActions';

import SmurfBox from './styles/SmurfBox';
import DeleteButton from './styles/DeleteButton';

const Smurf = (props) => {
    const dispatch = useDispatch();
    return(
        <SmurfBox onClick={() => dispatch({type: 'EDIT_SMURF', payload: {smurf: props.smurf}})}>
            <DeleteButton onClick={() => dispatch(deleteSmurf(props.smurf))}>X</DeleteButton>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfBox>
    );
};

export default Smurf;