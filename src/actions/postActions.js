//posts have a title and body
//can create a post
//can delete a post
//BONUS can update a post by passing an ide and new body

export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blog => ({
  type: CREATE_BLOG,
  payload: blog
});

//EXAMPLE
  
// export const CREATE_DOG = 'CREATE_DOG';
// export const createDog = dog => ({
//   type: CREATE_DOG,
//   payload: dog
// });

// export const DELETE_DOG = 'DELETE_DOG';
// export const deleteDog = (name) => ({
//   type: DELETE_DOG,
//   payload: name
// });
