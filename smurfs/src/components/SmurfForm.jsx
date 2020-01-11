import React, { useState } from 'react';
import { addSmurf } from '../actions/SmurfActions';
import { connect } from 'react-redux';

const SmurfForm = props => {
    const [thisSmurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Current Smurf: ', thisSmurf);
        props.addSmurf(thisSmurf);
        setSmurf('');
    }

    const handleChange = event => {
        const key = event.target.name;
        setSmurf({...thisSmurf, [key]: event.target.value});
        console.log(thisSmurf);
    }


    return(
        <form>
            <input type='text' name='name' placeholder='Name' onChange={handleChange}></input>
            <input type='text' name='age' placeholder='Age' onChange={handleChange}></input>
            <input type='text' name='height' placeholder='Height' onChange={handleChange}></input>
            <input type='submit' onClick={handleSubmit}></input>
        </form>
    );

}

export default connect(() => true, {addSmurf})(SmurfForm);