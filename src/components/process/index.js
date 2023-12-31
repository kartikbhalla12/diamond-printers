import Image from 'next/image';

import ArrowRightCurve from '@icons/ArrowRightCurve';

import styles from '@components/process/index.module.scss';

const images = [
	{
		alt: 'step 1',
		src: '/images/step1.png',
	},
	{
		alt: 'step 2',
		src: '/images/step2.png',
	},
	{
		alt: 'step 3',
		src: '/images/step3.png',
	},
];

const Process = ({ heading, steps }) => (
	<section className={styles.process} id='process'>
		<h2>{heading}</h2>

		<div className={styles.steps}>
			{steps.map((step, index) => (
				<div className={styles.step} key={index}>
					<div className={styles.imageContainer}>
						<Image
							src={images[index].src}
							alt={images[index].alt}
							quality={100}
							fill
						/>
					</div>

					<h3>{step.label}</h3>
					<p>{step.description}</p>
					{index < steps.length - 1 && (
						<ArrowRightCurve height={30} width={160} className={styles.arrow} />
					)}
				</div>
			))}
		</div>
	</section>
);

export default Process;
