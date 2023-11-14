import Image from 'next/image';

import styles from '@components/banner/index.module.scss';

const Banner = ({ heading, description, buttons }) => {
	return (
		<section className={styles.banner} id='home'>
			<div className={styles.leftBannerContainer}>
				<Image
					src='/images/banner-left.png'
					alt='banner-boxes-left'
					quality={100}
					priority
					fill
				/>
			</div>

			<div className={styles.contentContainer}>
				<h1>{heading}</h1>
				<h3>{description}</h3>
				<div className={styles.buttonContainer}>
					{buttons.map((button, index) => (
						<button
							key={index}
							className={index % 2 !== 0 ? styles.secondary : null}>
							<a href={button.link}>{button.label}</a>
						</button>
					))}
				</div>
			</div>

			<div className={styles.rightBannerContainer}>
				<Image
					src='/images/banner-right.png'
					alt='banner-boxes-right'
					quality={100}
					priority
					fill
				/>
			</div>
		</section>
	);
};

export default Banner;
