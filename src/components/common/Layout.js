import React, { useEffect, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Main_banner from '../pages/banner/Main_banner';
import Brand_banner from '../pages/banner/Brand_banner';

import Main_content from '../pages/content/main/Main_content';
import Footer from './Footer';
import Brand_contetnt from '../pages/content/brand/Brand_content';

function Layout({ children }) {
	const init = useRef(null);
	const test = useRef(null);

	useEffect(() => {
		//새로고침시 화면 제일 위로.
		init.current.focus();
	}, []);

	const router = useRouteMatch();
	console.log(router);
	let banner;
	let content;

	switch (router.path) {
		case '/':
			banner = <Main_banner />;
			content = <Main_content />;
			break;

		case '/brand':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		case '/product':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		case '/gallery':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		case '/youtube':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		case '/help':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		case '/signup':
			banner = <Brand_banner />;
			content = <Brand_contetnt />;
			break;

		default:
			return <p>죄송합니다.</p>;
	}

	return (
		<div className='layout'>
			<div className='skipNavi' tabIndex='0' ref={init}>
				<button
					aria-label='본문바로가기'
					onClick={(e) => {
						test.current.focus();
					}}>
					본문으로
				</button>
			</div>
			<>{banner}</>
			<main>
				<div className='anchor' tabIndex='0' ref={test} />
				{content}
			</main>
			<Footer tabIndex='0'>footer</Footer>
		</div>
	);
}

export default Layout;
