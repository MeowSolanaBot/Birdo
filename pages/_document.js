// >> Imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const name = 'BIRDO THE BIRD';
const desc =
		"The first bird on the BSC (BEP-20), inspired by Pepe The Frog concept. Flight mode: ACTIVATED";
const img = 'https://i.imgur.com/UU3zA2S.png';
const themeColor = '#dac78c';

// >> Script
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <!-- Main Meta Tags --> */}
					<meta charSet="utf-8" />
					<meta name="theme-color" content={themeColor} />
					<meta name="description" content={desc} />

					{/* <!-- Facebook Meta Tags --> */}
					<meta property="og:type" content="website" />
					<meta property="og:title" content={name} />
					<meta property="og:description" content={desc} />
					<meta property="og:image" content={img} />
					<meta property="og:site_name" content={name} />

					{/* <!-- Twitter Meta Tags --> */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={name} />
					<meta name="twitter:description" content={desc} />
					<meta name="twitter:image" content={img} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
