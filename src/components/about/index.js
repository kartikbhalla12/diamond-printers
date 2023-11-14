import Image from 'next/image';

import styles from '@components/about/index.module.scss';

import { getGoogleImageUrl } from '@utils/drive';

const About = ({ heading, description, stats, banner }) => {
	return (
		<section className={styles.about} id='about-us'>
			<div className={styles.content}>
				<h2>{heading}</h2>
				<p className={styles.description}>{description}</p>

				<div className={styles.statsContainer}>
					<div className={styles.stats}>
						{stats.map(({ count, title, description }, index) => (
							<div className={styles.stat} key={'about_us_stat' + index}>
								<div className={styles.statContent}>
									<h4>{count}</h4>
									<p>{title}</p>
								</div>

								<div className={styles.statDescription}>
									<p>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src={getGoogleImageUrl(banner)} fill alt='about-us' />
			</div>
		</section>
	);
};

export default About;
