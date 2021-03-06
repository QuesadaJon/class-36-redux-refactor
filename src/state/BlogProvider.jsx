import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initalState } from '../reducers/postReducer';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useSelector = selector => {
  const { state } = useContext(BlogContext);
  
  return selector(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(BlogContext);
  return dispatch;
};
