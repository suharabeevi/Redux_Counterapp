
const a=1;
function ValueReducer(state=a,action){
    switch(action.type){
        case "add":
        return state+1;

        case "sub":
        return state-1;
         default:
            return state;
    }
}
export default ValueReducer;