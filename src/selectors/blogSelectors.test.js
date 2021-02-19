import { countBlogs, getBlogs } from './blogSelectors';

describe('blog selectors', () => {
  it('select the list of blogs from state', () => {
    const state = {
      blogs:[{ title: 'title', body: 'body' }]
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual([{ title: 'title', body: 'body' }]);
  });

  it('select the number of blogs', () => {
    const state = {
      blogs: [{ title: 'title', body: 'body' }]
    };

    const blogs = countBlogs(state);

    expect(blogs).toEqual(1);
  });
});
