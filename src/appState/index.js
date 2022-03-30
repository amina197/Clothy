
import React from "react";
import reducer from './reducer.js';
const { useReducer } = React;


export const DispatchContext = React.createContext([null, () => {}]);
export const StateContext = React.createContext([{}]);


const initPageState = {
  QA: {},
  details: {},
  related: {},
  reviews: {},
};


const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initPageState);

  return (
    <DispatchContext.Provider value={[null, dispatch]}>
      <StateContext.Provider value={[state]}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};


export default AppContextProvider


