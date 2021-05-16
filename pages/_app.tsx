// #_document&_app: https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Menu from 'lib/components/menu/index';
import { ConfigProvider } from 'lib/data/provider';
import 'lib/globalStyle/globalStyle.sass'; // global Style
import 'highlight.js/styles/docco.css'; // highlight Style
const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>RJUI</title>
				<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover" />
			</Head>
			<main className="rjui-main-view">
				<ConfigProvider>
					<Menu />
					<Component {...pageProps} />
				</ConfigProvider>
			</main>
			<style jsx>{`
				.rjui-main-view {
					width: 100%;
					height: 100%;
					overflow: hidden;
				}
			`}</style>
		</>
	);
};
export default Application;