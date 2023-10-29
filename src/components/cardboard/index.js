import Image from 'next/image';

import styles from '@components/cardboard/index.module.scss';

import { getGoogleImageUrl } from '@utils/drive';

const Cardboard = ({ types, heading, description }) => {
	return (
		<div className={styles.cardboard}>
			<h2>{heading}</h2>

			<p className={styles.description}>{description}</p>

			<div className={styles.varietyContainer}>
				{types.map(type => (
					<div className={styles.variety} key={type.id}>
						<div className={styles.imageContainer}>
							<Image
								src={getGoogleImageUrl(type.id)}
								fill
								alt={type.label}
								quality={100}
							/>
						</div>

						<div>
							<h3>{type.label}</h3>
							<p>{type.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cardboard;
