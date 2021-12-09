import PropTypes from 'prop-types'
import Post from '../Post';

import './styles.scss';

const Posts = ({postsData, mode}) => {
  return(
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className={ mode? "posts-list" :"posts-zen"}>
     {postsData.map((post)=> <Post key={post.id} {...post} mode={mode}/>)}
    </div>
  </main>
)};
Posts.propTypes = {
postsData :  PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  }).isRequired
).isRequired
}
export default Posts;
