import { CREATE_BLOG, DELETE_BLOG } from '../actions/postActions';

export const initalState = {
  blogs: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.title !== action.payload)
      };
    default:
      return state;
  }
}
    
//can store an array of posts
//handle create a post
//handle delete a post
//BONUS: handle update a post by index

// EXAMPLE
    
// import { CREATE_DOG, DELETE_DOG } from '../actions/dogActions';

// export const initialState = {
//   dogs: []
// };

// export default function reducer(state, action) {
//   switch(action.type) {
//     case CREATE_DOG:
//       return {
//         ...state,
//         dogs: [...state.dogs, action.payload]
//       };
//     case DELETE_DOG:
//       return {
//         ...state,
//         dogs: state.dogs.filter(dog => dog.name !== action.payload)
//       };
//     default:
//       return state;
//   }
// }
