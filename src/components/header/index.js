import cn from 'classnames';
import Image from 'next/image';

import styles from '@components/header/index.module.scss';

const Header = ({ button, links }) => {
	return (
		<nav className={styles.header}>
			<div className={styles.headerContainer}>
				<Image
					src={'/images/logo.png'}
					className={cn(['d-inline-block', 'align-top'])}
					alt={'headerContent.logo.alt'}
					width={105}
					height={40}
					quality={100}
				/>

				<div className={styles.links}>
					{links.map((link, index) => (
						<a key={index} href={link.link}>
							{link.label}
						</a>
					))}
				</div>

				<button>
					<a href={button.link}>{button.label}</a>
				</button>
			</div>
		</nav>
	);
};

export default Header;
