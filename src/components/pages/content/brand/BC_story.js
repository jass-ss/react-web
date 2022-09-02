import React, { useRef } from 'react';
import { path } from '../main/Main_content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Slide } from '../../../class/slide';
import { useEffect } from 'react';

function BC_story() {
	const title = ['ECOFRIENDLY', 'EFFICIENT', 'SUSTAINABILITY'];
	const text = [
		`
  High performance and low consumption, highest energy efficiency
  class rating`,
		`
  onstant and strict control tests throughout the entire production
  process testify`,
		`Quality, Health, Safety and Environment policy`,
	];
	const img = [
		`${path}/img/eco.jpg`,
		`${path}/img/test.jpg`,
		`${path}/img/mecanic2.jpg`,
	];
	const alt = [`green grass`, `engineers`, `machine`];

	const ref = useRef(null);
	const svg = useRef(null);

	let press = false;
	const slide = new Slide(350, 85, 3);

	const touchStart = (e) => {
		if (window.innerWidth <= 450) {
			press = true;
			const first = e.changedTouches[0].clientX;
			slide.start = first;
		}
	};
	const touchMove = (e) => {
		if (press) {
			const now = e.changedTouches[0].clientX;
			ref.current.style.marginLeft = `${slide.slideMove(now)}%`;
		}
	};
	const touchEnd = (e) => {
		press = false;
		const end = e.changedTouches[0].clientX;
		ref.current.style.marginLeft = `${slide.slideEnd(end)}%`;
	};

	const focusMove = (idx) => {
		if (window.innerWidth <= 450)
			ref.current.style.marginLeft = `${idx * -85}%`;
	};

	useEffect(() => {
		const io = new IntersectionObserver((entry) => {
			if (entry[0].isIntersecting && svg.current) {
				svg.current.classList.add('on');
			}
		});
		io.observe(svg.current);
	}, []);

	return (
		<>
			<h1>CHROME KICHEN - TECHNOLOGY WITH STYLE</h1>

			<div className='story'>
				<svg
					ref={svg}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='-10 -10 600 540'>
					<path
						aria-hidden={true}
						d='M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z'
					/>
				</svg>

				<p className='intro'>
					quasi iure necessitatibus mollitia impedit error distinctio magnam aut
					neque quod optio libero dolor eligendi ut atque ab aperiam
				</p>
			</div>

			<div
				className='features'
				ref={ref}
				onTouchStart={(e) => touchStart(e)}
				onTouchMove={(e) => touchMove(e)}
				onTouchEnd={(e) => touchEnd(e)}>
				{title.map((t, idx) => {
					return (
						<div
							className='box'
							key={idx}
							onFocus={() => focusMove(idx)}
							tabIndex={0}>
							<img src={img[idx]} alt={alt[idx]} />
							<h2>{t}</h2>
							<p>{text[idx]}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default BC_story;
