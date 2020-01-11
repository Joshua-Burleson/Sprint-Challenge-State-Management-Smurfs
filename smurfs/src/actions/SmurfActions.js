import axios from "axios";


export const editSmurf = smurf => dispatch => {
    console.log(smurf)
    axios.put(`http://127.0.0.1:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
        console.log('update successful', res);
        dispatch({type: 'UPDATE_SMURF', payload: res.data});
       })
    .catch(err => console.log('ERROR: ', err));
};


export const refreshSmurfs = (type) => dispatch => {
    dispatch({type: 'LOADING'});
    axios.get('http://127.0.0.1:3333/smurfs')
         .then(res => {
             console.log('Succesful retrieval: ', res);
             dispatch({type: 'REFRESH', payload: res.data});
         })
         .catch(err => console.log('ERRORRRROROR: ', err));
}



export const addSmurf = (newSmurf) => dispatch => {
    dispatch({type: 'LOADING'});
    axios.post('http://127.0.0.1:3333/smurfs', newSmurf)
         .then(res => {
             console.log('post successful', res);
             dispatch({type: 'ADD_SMURF', payload: res.data});
            })
         .catch(err => console.log('ERROR: ', err));
};

// export const refreshSmurfs = () => dispatch => {
//     // getSmurfs({type: 'REFRESH'});
// };