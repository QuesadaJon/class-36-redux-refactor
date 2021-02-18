import { createBlog } from '../actions/postActions';
import reducer from './postReducer';

describe('blog reducer', () => {
  it('add blog with CREATE_BLOG action', () => {
    const state = {
      blogs:[]
    };

    const action = createBlog({ title: 'title', body: 'body' });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{
        title: 'title', body: 'body'
      }]
    });
  });
})
;
