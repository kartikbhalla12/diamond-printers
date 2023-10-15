'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import * as yup from 'yup';

import ArrowDown from '@icons/ArrowDown';

import styles from '@components/priceEstimator/index.module.scss';

const PriceEstimator = ({
	heading,
	description,
	disclaimer,
	fields: { material, quantity, cardboard, dimensions, printing, lamination },
}) => {
	const [unitPrice, setUnitPrice] = useState(0);

	const schema = new yup.ObjectSchema({
		material: yup.number(),
		printing: yup.number(),
		cardboard: yup.number(),
		lamination: yup.number(),
		dimensions: yup.object({
			length: yup
				.number()
				.typeError('Should be a number')
				.min(1, 'Minimum 1 inch'),
			width: yup
				.number()
				.typeError('Should be a number')
				.min(1, 'Minimum 1 inch'),
			height: yup
				.number()
				.typeError('Should be a number')
				.min(1, 'Minimum 1 inch'),
		}),
		quantity: yup
			.number()
			.typeError('Should be a number')
			.min(quantity.min, `Minimum ${quantity.min} pcs`),
	});

	return (
		<section className={styles.priceEstimator}>
			<Image
				src='/images/price-estimator-bg.png'
				fill
				alt='testimonials background'
				className={styles.background}
				quality={100}
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2>{heading}</h2>

					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.estimator}>
					<div className={styles.estimatorContainer}>
						<Formik
							initialValues={{
								material: '',
								printing: '',
								cardboard: '',
								lamination: '',
								dimensions: {
									length: '',
									width: '',
									height: '',
								},
								quantity: '',
							}}
							validationSchema={schema}
							validateOnChange
							validateOnBlur
							onSubmit={async ({
								material,
								printing,
								cardboard,
								dimensions,
								lamination,
							}) => {
								setUnitPrice(
									+material *
										+printing *
										+cardboard *
										+lamination *
										+dimensions.length *
										+dimensions.height *
										+dimensions.width
								);
							}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								submitForm,
							}) => (
								<form onSubmit={handleSubmit}>
									<div className={styles.field}>
										<label htmlFor='material'>{material.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='material'
												name='material'
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.material}>
												<option value='' disabled>
													Choose
												</option>
												{material.values.map(({ value, label }) => (
													<option key={`materials_${label}`} value={+value}>
														{label}
													</option>
												))}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.material && touched.material && (
										<p className={styles.fieldError}>{errors.material}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='printing'>{printing.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='printing'
												name='printing'
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.printing}>
												<option value='' disabled>
													Choose
												</option>
												{printing.values.map(({ value, label }) => (
													<option key={`printings_${label}`} value={+value}>
														{label}
													</option>
												))}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.printing && touched.printing && (
										<p className={styles.fieldError}>{errors.printing}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='cardboard'>{cardboard.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='cardboard'
												name='cardboard'
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.cardboard}>
												<option value='' disabled>
													Choose
												</option>
												{cardboard.values.map(({ value, label }) => (
													<option key={`cardboard_${label}`} value={+value}>
														{label}
													</option>
												))}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.cardboard && touched.cardboard && (
										<p className={styles.fieldError}>{errors.cardboard}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='lamination'>{lamination.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='lamination'
												name='lamination'
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.lamination}>
												<option value='' disabled>
													Choose
												</option>
												{lamination.values.map(({ value, label }) => (
													<option key={`lamination_${label}`} value={+value}>
														{label}
													</option>
												))}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.lamination && touched.lamination && (
										<p className={styles.fieldError}>{errors.lamination}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='size'>{dimensions.title}</label>

										<div className={styles.dimensionsInputContainer}>
											<input
												type='number'
												name='dimensions.length'
												placeholder={dimensions.length}
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.dimensions.length}
											/>
											<input
												type='number'
												name='dimensions.width'
												placeholder={dimensions.width}
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.dimensions.width}
											/>
											<input
												type='number'
												name='dimensions.height'
												placeholder={dimensions.height}
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.dimensions.height}
											/>
										</div>
									</div>

									{touched.dimensions &&
										(errors.dimensions?.length ||
											errors.dimensions?.width ||
											errors.dimensions?.height) && (
											<p className={styles.fieldError}>
												{errors.dimensions?.length ||
													errors.dimensions?.width ||
													errors.dimensions?.height}
											</p>
										)}

									<div className={styles.field}>
										<label htmlFor='size'>{quantity.title}</label>

										<div className={styles.inputContainer}>
											<input
												type='number'
												name='quantity'
												placeholder='0'
												onChange={e => {
													handleChange(e);
													setTimeout(submitForm, 0);
												}}
												onBlur={handleBlur}
												value={values.quantity}
											/>
										</div>
									</div>
									{errors.quantity && touched.quantity && (
										<p className={styles.fieldError}>{errors.quantity}</p>
									)}

									<div className={styles.estimate}>
										<div className={styles.total}>
											<h4>Subtotal</h4>
											<p>Rs. {unitPrice * values.quantity}</p>
										</div>

										<div className={styles.unit}>
											<h4>Unit Price</h4>
											<p>Rs. {unitPrice}</p>
										</div>
									</div>
								</form>
							)}
						</Formik>
					</div>
					<p className={styles.disclaimer}>* {disclaimer}</p>
				</div>
			</div>
		</section>
	);
};

export default PriceEstimator;
