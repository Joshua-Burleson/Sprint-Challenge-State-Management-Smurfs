const initialState = {smurfs: [{
    name: 'Test Smurf',
    age: 200,
    height: '10cm'
}], loading: false};



export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case('LOADING'):
                console.log('Loading...');
                return{...state, loading: true};
        case('REFRESH'):
                return{smurfs: [...action.payload], loading: false};
        case('ADD_SMURF'):
                console.log('Smurf Added');
                return {smurfs: [...action.payload], loading: false};
        case('UPDATE_SMURF'):
                console.log('Attempting Update');
                return {...state};
        default:
                return {...state};
    }
}