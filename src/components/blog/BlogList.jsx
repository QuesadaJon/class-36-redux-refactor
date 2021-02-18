import React from 'react';
import { useSelector } from '../../state/DogProvider';
import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.map(blog => (
    <li key={blog.name}>
      <Blog {...blog} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
// import { useSelector } from '../../state/DogProvider';
// import { getDogs } from '../../selectors/dogSelectors';
// import Dog from './Dog';

// const DogList = () => {
//   const dogs = useSelector(getDogs);

//   const dogElements = dogs.map(dog => (
//     <li key={dog.name}>
//       <Dog {...dog} />
//     </li>
//   ));

//   return (
//     <ul>
//       {dogElements}
//     </ul>
//   );
// };

// export default DogList;
