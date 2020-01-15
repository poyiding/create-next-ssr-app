import { List, Avatar } from 'antd';
// import { connect } from 'react-redux'
import { useSelector } from 'react-redux';

const MovieList = (props) => {
  const data = useSelector(state => state.movieData);
  const { movieList = [] } = data;
  return (
    <div>
      <p>{props.title}</p>
      <List
        itemLayout="horizontal"
        dataSource={movieList}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.images.small} />}
              title={item.title}
              description={item.mainland_pubdate}
            />
          </List.Item>
        )}
      />

    </div>
  );
}
export default MovieList;

