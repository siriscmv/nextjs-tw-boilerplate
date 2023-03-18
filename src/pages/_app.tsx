import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Title</title>
				<meta property='og:title' content='Title' />
				<meta property='og:description' content='description' />
				<meta property='theme-color' content='#000000' />
				<meta name='theme-color' content='#000000' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='description' />
			</Head>
			<Component {...pageProps} />{' '}
		</>
	);
}

export default MyApp;
