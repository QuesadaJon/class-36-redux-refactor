import React, { createContext, useReducer } from 'react';
import reducer, { initalState } from '../reducers/postReducer';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <BlogContext.provider value={{ state, dispatch }}>
      {children}
    </BlogContext.provider>
  );
};
