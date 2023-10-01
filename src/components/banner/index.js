import Image from 'next/image';

import styles from '@components/banner/index.module.scss';

const Banner = ({ heading, description, buttons }) => {
	return (
		<section className={styles.banner}>
			<Image
				src='/images/banner-left.png'
				height={705}
				width={600}
				alt='banner-boxes-left'
				className={styles.bannerLeft}
				quality={100}
			/>

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

			<Image
				src='/images/banner-right.png'
				height={545}
				width={500}
				alt='banner-boxes-right'
				className={styles.bannerRight}
				quality={100}
			/>
		</section>
	);
};

export default Banner;
