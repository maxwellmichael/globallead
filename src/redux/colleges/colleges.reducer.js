let initialState = [];


const collegesReducer = (state=initialState, action)=>{
    let colleges = [...state];
    switch(action.type){

        case 'ADD_COLLEGE':
            colleges.push(action.payload.college);
            return colleges;
        
        case 'CLEAR_COLLEGES':
            return []

        default:
            return [...state];

    }
}

export default collegesReducer;