import React, { useState, useEffect } from 'react';
import { addSmurf, editSmurf } from '../actions/SmurfActions';
import { connect } from 'react-redux';
import FormForSmurf from './styles/FormForSmurf';

const SmurfForm = props => {
    const [thisSmurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const [editSmurf, setEditSmurf] = useState();

    useEffect(() => {
        setEditSmurf(props.editData.smurf);
        console.log('Edit Smurf is now: ', props.editData.smurf);
    }, [props.editData])

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Current Smurf: ', thisSmurf);
        props.editData.status ? props.editSmurf(editSmurf) : props.addSmurf(thisSmurf);
        setSmurf('');
        setEditSmurf('');
    }

    const handleChange = event => {
        const key = event.target.name;

        const updateSelectedState = (stateSetter, state) => {
            stateSetter({...state, [key]: event.target.value});
        }

        editSmurf ? updateSelectedState(setEditSmurf, editSmurf) : updateSelectedState(setSmurf, thisSmurf)

    }


    console.log(editSmurf, thisSmurf)

    return(
        <FormForSmurf>
            <h2>Add a Smurf!</h2>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} value={editSmurf ? editSmurf.name : thisSmurf.name}></input>
            <input type='number' name='age' placeholder='Age' onChange={handleChange} value={editSmurf ? Number(editSmurf.age) : thisSmurf.age}></input>
            <input type='text' name='height' placeholder='Height' onChange={handleChange} value={editSmurf ? editSmurf.height : thisSmurf.height}></input>
            <input type='submit' onClick={handleSubmit}></input>
        </FormForSmurf>
    );

}

export default connect(state => {return {editData: state.editing}}, {addSmurf, editSmurf})(SmurfForm);