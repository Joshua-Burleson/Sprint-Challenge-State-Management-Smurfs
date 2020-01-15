const initialState = {
    smurfs: [{
        name: 'Test Smurf',
        age: 200,
        height: '10cm'
    }], 
    loading: false,
    editing: {
        status: false,
        smurf: {}
    }};


export const smurfReducer = (state = initialState, action) => {
    switch(action.type){

        case('LOADING'):
                console.log('Loading...');
                return{...state, loading: true};

        case('REFRESH'):
                return{...state, smurfs: [...action.payload], loading: false};

        case('ADD_SMURF'):
                console.log('Smurf Added');
                return {...state, smurfs: [...action.payload], loading: false};
                
        case('UPDATE_SMURF'):
                console.log('Update Complete');
                return {...state, smurfs: [...action.payload], loading: false, editing: {status: false, smurf: ''}};

        case('EDIT_SMURF'): 
                console.log('Editing');
                return {...state, editing: {status: true, smurf: action.payload.smurf}};

        case('DELETE_SMURF'):
                console.log('Deletion Succesful');
                return {...state};

        default:
                return {...state};
    }
}