import Image from 'next/image';

import styles from '@components/about/index.module.scss';

import { getGoogleImageUrl } from '@utils/drive';

const About = ({ heading, description, stats, banner }) => {
	return (
		<div className={styles.about}>
			<div className={styles.imageContainer}>
				<Image src={getGoogleImageUrl(banner)} fill alt='about-us' />
			</div>
			<div className={styles.content}>
				<h2>{heading}</h2>
				<p className={styles.description}>{description}</p>

				<div className={styles.stats}>
					{stats.map(({ iconId, title, description }) => (
						<div className={styles.stat} key={iconId}>
							<Image
								src={getGoogleImageUrl(iconId)}
								width={50}
								height={50}
								alt={title}
							/>
							<div className={styles.statContent}>
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
