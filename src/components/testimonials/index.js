'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import styles from '@components/testimonials/index.module.scss';

import ArrowLeftCircle from '@icons/ArrowLeftCircle';
import ArrowRightCircle from '@icons/ArrowRightCircle';

const Testimonials = ({ heading, testimonials }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		containScroll: 'scrollSnap',
		inViewThreshold: 0.6,
		startIndex: 1,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className={styles.testimonials} id='testimonials'>
			<Image
				src='/images/testimonials-bg.png'
				fill
				alt='testimonials background'
				className={styles.background}
				quality={100}
			/>
			<div className={styles.overlay} />
			<div className={styles.container}>
				<h2>{heading}</h2>
				<div className={styles.embla} ref={emblaRef}>
					<div className={styles.emblaContainer}>
						{testimonials.map((testimonial, index) => (
							<div className={styles.testimonial} key={index}>
								<p>{testimonial.message}</p>
								<h4>{testimonial.name}</h4>
								<h5>{testimonial.client}</h5>
							</div>
						))}
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<button onClick={scrollPrev}>
						<ArrowLeftCircle className={styles.arrow} />
					</button>
					<button onClick={scrollNext}>
						<ArrowRightCircle className={styles.arrow} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
