import Image from 'next/image';

import { getGoogleImageUrl } from '@utils/drive';

import styles from '@components/printing/index.module.scss';

const Printing = ({ heading, description, types }) => {
	return (
		<div className={styles.printing}>
			<h2>{heading}</h2>

			<div className={styles.separator} />
			<p className={styles.description}>{description}</p>

			<div className={styles.types}>
				{types.map(type => (
					<div key={type.id} className={styles.type}>
						<div className={styles.imageContainer}>
							<Image src={getGoogleImageUrl(type.id)} fill alt={type.label} />
						</div>

						<p>{type.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Printing;
