// import React, { useState } from 'react';
// import { createDog } from '../../actions/dogActions';
// import { useDispatch } from '../../state/DogProvider';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { createBlog } from '../../actions/postActions';

const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="title"
        value={title}
        onChange={({ target }) => setTitle(target.value)} 
      />
      <input
        type="body"
        placeholder="body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Blog</button>
    </form>
  );
};

export default BlogForm;

// const DogForm = () => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [age, setAge] = useState(1);
//   const [weight, setWeight] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//     dispatch(createDog({ name, age, weight }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={({ target }) => setName(target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Age"
//         value={age}
//         onChange={({ target }) => setAge(target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Weight"
//         value={weight}
//         onChange={({ target }) => setWeight(target.value)} />
//       <button>Create Dog</button>
//     </form>
//   );
// };

// export default DogForm;
