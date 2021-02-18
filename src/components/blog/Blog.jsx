import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ title, body }) => {

  return (
    <>
  
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Blog;

// import { useDispatch } from '../../state/DogProvider';
// import { deleteDog } from '../../actions/dogActions';

// const Dog = ({ name, age, weight }) => {
//   const dispatch = useDispatch();
  
//   const handleClick = () => {
//     dispatch(deleteDog(name));
//   };
  
//   return (
//     <>
//       <dl>
//         <dt>Name</dt>
//         <dd>{name}</dd>
      
//         <dt>Age</dt>
//         <dd>{age}</dd>
  
//         <dt>Weight</dt>
//         <dd>{weight}</dd>
//       </dl>
//       <button onClick={handleClick}>Delete</button>
//     </>
//   );
// };

// Dog.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   weight: PropTypes.string.isRequired
// };

// export default Dog;
