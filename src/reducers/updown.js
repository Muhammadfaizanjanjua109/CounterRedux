const intialState=0;
const Counter=(state=intialState,action)=>{
switch(action.type){
    case ("INC_FUN"):return state+1;
    case ("DCR_FUN"):return state-1;
    default :return state;
        
}
}
export default Counter;