import { createReducer } from "@ngrx/store";

const initialState={
    'counterValue':0,
    'name':'Jivan',
    'age':30
};
// export const counterReducer=createReducer(initialState);

//// in older version
export function counterReducer(state=initialState){
    return state;
}
