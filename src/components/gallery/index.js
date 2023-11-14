'use client';

import Image from 'next/image';
import ReactPhotoGallery from 'react-photo-album';

import { getGoogleImageUrl } from '@utils/drive';
import { getDimensionsFromOrientation } from '@utils/dimensions';

import styles from '@components/gallery/index.module.scss';

const Gallery = ({ heading, photos }) => {
	const galleryPhotos = photos.map(({ label, id, orientation }) => ({
		src: getGoogleImageUrl(id),
		title: label,
		alt: label,
		...getDimensionsFromOrientation(orientation),
	}));

	return (
		<section className={styles.gallery} id='gallery'>
			<h2>{heading}</h2>

			<div className={styles.images}>
				<ReactPhotoGallery
					photos={galleryPhotos}
					layout='rows'
					spacing={4}
					renderPhoto={({
						photo,
						imageProps: { alt, title, sizes, className, onClick },
						wrapperStyle,
					}) => (
						<div style={wrapperStyle} className={styles.imageContainer}>
							<Image
								fill
								src={photo}
								placeholder={'blurDataURL' in photo ? 'blur' : undefined}
								quality={100}
								{...{ alt, title, sizes, className, onClick }}
							/>
						</div>
					)}
				/>
			</div>
		</section>
	);
};

export default Gallery;
