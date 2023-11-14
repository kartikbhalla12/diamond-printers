'use client';

import { Fragment, useRef, useState } from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import * as yup from 'yup';

import ArrowDown from '@icons/ArrowDown';

import styles from '@components/priceEstimator/index.module.scss';

const PriceEstimator = ({
	visible,
	heading,
	description,
	disclaimer,
	fields: { material, quantity, cardboard, dimensions, printing, lamination },
}) => {
	const [unitPrice, setUnitPrice] = useState(0);
	const [qty, setQty] = useState(0);

	const formikRef = useRef();

	const submitAndValidateForm = async () => {
		const errors = await formikRef.current.validateForm();
		if (Object.keys(errors).length) {
			setUnitPrice(0);
			setQty(0);
		} else setTimeout(formikRef.current.submitForm, 0);
	};

	const schema = new yup.ObjectSchema({
		materialValue: yup.string(),
		printingValue: yup.string(),
		cardboardValue: yup.string(),
		laminationValue: yup.string(),
		dimensionsValue: yup.object({
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
		quantityValue: yup
			.number()
			.typeError('Should be a number')
			.min(quantity.min, `Minimum ${quantity.min} pcs`),
	});

	if (!visible) return <></>;

	const splitData = m => m.split(',').map(d => d.trim());
	// const getDataIndex = (arr, key) => arr.findIndex((e) => e.key === key);

	// const getMaterialIndex = (key) =>
	//   material.values.findIndex((m) => m.key === key);

	// const getPrintingIndex = (key) =>
	//   printing.values.findIndex((p) => p.key === key);

	return (
		<section className={styles.priceEstimator} id='price-estimator'>
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
							innerRef={formikRef}
							initialValues={{
								materialValue: '',
								printingValue: '',
								cardboardValue: '',
								laminationValue: '',
								dimensionsValue: {
									length: '',
									width: '',
									height: '',
								},
								quantityValue: '',
							}}
							validationSchema={schema}
							onSubmit={async ({
								materialValue,
								printingValue,
								cardboardValue,
								dimensionsValue,
								laminationValue,
								quantityValue,
							}) => {
								// console.log(                materialValue,
								//   printingValue,
								//   cardboardValue,
								//   dimensionsValue,
								//   laminationValue,
								//   quantityValue,)

								// console.log(

								const combination = `${materialValue} ${printingValue} ${cardboardValue} ${laminationValue}`;
								console.log(combination);

								// const materialPrice =
								//   +material.values.find((m) => m.code === materialValue)
								//     ?.value || 1;
								// const printingPrice =
								//   +printing.values.find((m) => m.code === printingValue)
								//     ?.value || 1;
								// const cardboardPrice =
								//   +cardboard.values.find((m) => m.code === cardboardValue)
								//     ?.value || 1;
								// const laminationPrice =
								//   +lamination.values.find((m) => m.code === laminationValue)
								//     ?.value || 1;

								setUnitPrice(0);

								setQty(0);
							}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
							}) => (
								<form onSubmit={handleSubmit}>
									<div className={styles.field}>
										<label htmlFor='materialValue'>{material.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='materialValue'
												name='materialValue'
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.materialValue}>
												<option value='' disabled>
													Choose
												</option>
												{material.values.map(({ label, code }) => (
													<option key={`materials_${label}`} value={code}>
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
									{errors.materialValue && touched.materialValue && (
										<p className={styles.fieldError}>{errors.materialValue}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='cardboardValue'>{cardboard.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='cardboardValue'
												name='cardboardValue'
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.cardboardValue}>
												<option value='' disabled>
													Choose
												</option>
												{cardboard.values.map(
													({ code, label, materials }, index) => {
														if (
															splitData(materials).includes(
																values.materialValue
															)
														)
															return (
																<option key={`cardboard_${label}`} value={code}>
																	{label}
																</option>
															);

														return <Fragment key={index}></Fragment>;
													}
												)}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.cardboardValue && touched.cardboardValue && (
										<p className={styles.fieldError}>{errors.cardboardValue}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='printingValue'>{printing.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='printingValue'
												name='printingValue'
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.printingValue}>
												<option value='' disabled>
													Choose
												</option>
												{printing.values.map(
													({ label, materials, code }, index) => {
														if (
															splitData(materials).includes(
																values.materialValue
															)
														)
															return (
																<option key={`printing_${label}`} value={code}>
																	{label}
																</option>
															);

														return <Fragment key={index}></Fragment>;
													}
												)}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.printingValue && touched.printingValue && (
										<p className={styles.fieldError}>{errors.printingValue}</p>
									)}

									<div className={styles.field}>
										<label htmlFor='laminationValue'>{lamination.title}</label>
										<div className={styles.selectContainer}>
											<select
												id='laminationValue'
												name='laminationValue'
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.laminationValue}>
												<option value='' disabled>
													Choose
												</option>
												{lamination.values.map(
													(
														{
															label,
															materials,
															printing: printingValidation,
															code,
														},
														index
													) => {
														if (
															splitData(materials).includes(
																values.materialValue
															) &&
															splitData(printingValidation).includes(
																values.printingValue
															)
														)
															return (
																<option
																	key={`lamination_${label}`}
																	value={code}>
																	{label}
																</option>
															);

														return <Fragment key={index}></Fragment>;
													}
												)}
											</select>
											<ArrowDown
												className={styles.icon}
												width={14}
												height={14}
											/>
										</div>
									</div>
									{errors.laminationValue && touched.laminationValue && (
										<p className={styles.fieldError}>
											{errors.laminationValue}
										</p>
									)}

									<div className={styles.field}>
										<label htmlFor='dimensionsValue'>{dimensions.title}</label>

										<div className={styles.dimensionsInputContainer}>
											<input
												type='number'
												name='dimensionsValue.length'
												placeholder={dimensions.length}
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.dimensionsValue.length}
											/>
											<input
												type='number'
												name='dimensionsValue.width'
												placeholder={dimensions.width}
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.dimensionsValue.width}
											/>
											<input
												type='number'
												name='dimensionsValue.height'
												placeholder={dimensions.height}
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.dimensionsValue.height}
											/>
										</div>
									</div>

									{touched.dimensionsValue &&
										(errors.dimensionsValue?.length ||
											errors.dimensionsValue?.width ||
											errors.dimensionsValue?.height) && (
											<p className={styles.fieldError}>
												{errors.dimensionsValue?.length ||
													errors.dimensionsValue?.width ||
													errors.dimensionsValue?.height}
											</p>
										)}

									<div className={styles.field}>
										<label htmlFor='quantityValue'>{quantity.title}</label>

										<div className={styles.inputContainer}>
											<input
												type='number'
												name='quantityValue'
												placeholder='0'
												onChange={async e => {
													await handleChange(e);
													submitAndValidateForm();
												}}
												onBlur={handleBlur}
												value={values.quantityValue}
											/>
										</div>
									</div>
									{errors.quantityValue && touched.quantityValue && (
										<p className={styles.fieldError}>{errors.quantityValue}</p>
									)}
								</form>
							)}
						</Formik>
						<div className={styles.estimate}>
							<div className={styles.total}>
								<h4>Subtotal</h4>
								<p>Rs. {unitPrice * qty}</p>
							</div>

							<div className={styles.unit}>
								<h4>Unit Price</h4>
								<p>Rs. {unitPrice}</p>
							</div>
						</div>
					</div>
					<p className={styles.disclaimer}>* {disclaimer}</p>
				</div>
			</div>
		</section>
	);
};

export default PriceEstimator;
