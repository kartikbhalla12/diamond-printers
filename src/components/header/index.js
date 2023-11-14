'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { getGoogleImageUrl } from '@utils/drive';

import Menu from '@icons/menu';

import styles from '@components/header/index.module.scss';

const NavLinks = ({ links, onClick }) => (
	<div className={styles.links}>
		{links.map((link, index) => (
			<a key={index} href={link.link} onClick={onClick}>
				{link.label}
			</a>
		))}
	</div>
);

const NavButton = ({ link, label }) => (
	<button>
		<a href={link}>{label}</a>
	</button>
);

const NavMenuIcon = ({ onClick }) => (
	<div className={styles.menuContainer} onClick={onClick}>
		<Menu />
	</div>
);

const Header = ({ button, links, logo }) => {
	const [show, setShow] = useState();

	useEffect(() => {
		document.documentElement.style.overflow = show ? 'hidden' : 'unset';
	}, [show]);

	return (
		<nav className={styles.container} id='header'>
			<div className={styles.header}>
				<div className={styles.headerContainer}>
					<div className={styles.logoContainer}>
						<Image
							src={getGoogleImageUrl(logo.id)}
							alt={logo.alt}
							fill
							priority
							quality={100}
						/>
					</div>
					<NavLinks links={links} />
					<NavButton link={button.link} label={button.label} />
					<NavMenuIcon onClick={() => setShow(true)} />
				</div>
			</div>
			<div className={cn([styles.mobileHeader, { [styles.show]: show }])}>
				<div className={styles.innerContainer}>
					<NavMenuIcon onClick={() => setShow(false)} />
					<NavLinks links={links} onClick={() => setShow(false)} />
					<NavButton link={button.link} label={button.label} />
				</div>
			</div>
		</nav>
	);
};

export default Header;
