
import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Layout from '../components/Layout';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import LoadingBar from "react-top-loading-bar";
import '../styles/empty.css';

class MyApp extends App {
	// static async getInitialProps({ Component, router, ctx }) {
	// 	let pageProps = {}

	// 	if (Component.getInitialProps) {
	// 		pageProps = await Component.getInitialProps(ctx)
	// 	}

	// 	return { pageProps }
	// }
	state = {
		loadingBarProgress: 0,
	}

	componentDidMount() {
		Router.events.on('routeChangeStart', this.startLoading)
		Router.events.on('routeChangeComplete', this.complete)
		Router.events.on('routeChangeError', this.onLoaderFinished)
	}

	componentWillUnmount() {
		Router.events.off('routeChangeStart', this.startLoading)
		Router.events.off('routeChangeComplete', this.complete)
		Router.events.off('routeChangeError', this.onLoaderFinished)
	}
	startLoading = (url) => {
		const { pathname } = this.props.router;
		if (pathname !== url) {
			this.setState({ loadingBarProgress: 30 });
			this.excuteComplete = true;
		} else {
			this.excuteComplete = false;
		}
	}
	complete = () => {

		if (this.excuteComplete) {
			this.setState({ loadingBarProgress: 100 });
		}
	};

	onLoaderFinished = () => {
		this.setState({ loadingBarProgress: 0 });
	};

	render() {
		const { Component, pageProps, reduxStore, router } = this.props;
		const { loadingBarProgress } = this.state;
		return (
			<>


				<Layout pagePathName={router.pathname}>
					<LoadingBar
						progress={loadingBarProgress}
						height={2}
						color="#0070f3"
						onLoaderFinished={() => this.onLoaderFinished()}
					/>
					<Provider store={reduxStore}>
						<Component {...pageProps} />
					</Provider>
				</Layout>
			</>
		);
	}
}

export default withReduxStore(MyApp);
