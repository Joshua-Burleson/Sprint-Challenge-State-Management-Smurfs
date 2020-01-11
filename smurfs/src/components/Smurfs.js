import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { refreshSmurfs } from '../actions/SmurfActions';

import Smurf from './Smurf';

const Smurfs = (props) => {
    //onMount load current DB data from API
    useEffect(() => props.refreshSmurfs(), []);
    console.log(props)
    return(
        <div>
            {   props.state.loading ? <h2>Loading...</h2> : 
                props.state.smurfs.map(smurf => <Smurf key={smurf.name+smurf.id} smurf={smurf} />)
            }
        </div>
    )
}

export default connect(state => {return {state}}, {refreshSmurfs})(Smurfs);