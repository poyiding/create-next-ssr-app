import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import MovieList from '../components/MovieList';
import axios from 'axios';
import { queryMovie } from '../actions/movieList';

const About = (props) => {
	useEffect(() => {
		const { isServer, data, dispatch } = props;
		// 由于刷新页面，getInitialProps只会在服务端执行，所以当服务端渲染时，需要重新发dispatch。
		if(isServer) {
			dispatch(queryMovie(data));
		}
	}, [props])
	return (
		<MovieList title={props.data.title} />
	);
};

About.getInitialProps = async ({ reduxStore, req }) => {
	const isServer = !!req;
	const res = await axios({
		method: 'get',
		url: 'http://douban.uieee.com/v2/movie/in_theaters',
	});
	reduxStore.dispatch(queryMovie(res.data))
	return { isServer, data: res.data }
}
export default connect()(About);
