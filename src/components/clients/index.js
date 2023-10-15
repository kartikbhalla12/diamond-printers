import Image from 'next/image';

import styles from '@components/clients/index.module.scss';

import { getGoogleImageUrl } from '@utils/drive';

const Clients = ({ heading, description, clients }) => {
	return (
		<section className={styles.clients}>
			<h2>{heading}</h2>
			<h3>{description}</h3>
			<div className={styles.images}>
				{clients.map(id => (
					<div className={styles.imageContainer} key={'client_image_' + id}>
						<Image
							src={getGoogleImageUrl(id)}
							alt={'client_image_' + id}
							quality={100}
							fill
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
