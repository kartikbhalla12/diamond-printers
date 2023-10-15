'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import BarLoader from 'react-spinners/BarLoader';

import styles from '@components/contactUs/index.module.scss';

import Location from '@icons/location';
import Phone from '@icons/phone';
import Mail from '@icons/mail';

const schema = new yup.ObjectSchema({
	name: yup
		.string()
		.matches(/^[A-Za-z ]*$/, 'Please enter valid name')
		.min(1, 'Required')
		.max(100, 'Please enter valid name')
		.required('Required'),
	email: yup.string().email('Please enter valid email').required('Required'),
	phone: yup
		.string()
		.test('phone-test', 'Please enter valid phone number', phone =>
			isValidPhoneNumber('+91' + phone)
		)
		.required('Required'),
	message: yup.string().min(1, 'Required').required('Required'),
});

const ContactUs = ({ heading, description, email, phone, address, form }) => {
	const [isSuccess, setSuccess] = useState(false);
	const [isError, setError] = useState(false);

	return (
		<section className={styles.contactUs}>
			<Image
				src='/images/contact-us-bg.png'
				fill
				alt='contact us background'
				className={styles.background}
				quality={100}
			/>
			<div className={styles.overlay} />
			<div className={styles.contactContainer}>
				<div className={styles.leftContainer}>
					<h2>{heading}</h2>
					<p className={styles.subHeading}>{description}</p>

					<div className={styles.details}>
						<div className={styles.detail}>
							<Location />
							<a
								href={address.link}
								target='_blank'
								className={styles.location}>
								{address.label}
							</a>
						</div>
						<div className={styles.detail}>
							<Phone />

							<a href={`tel:${phone.value}`}>{phone.label}</a>
						</div>
						<div className={styles.detail}>
							<Mail />
							<a href={`mailto:${email.value}`}>{email.label}</a>
						</div>
					</div>
				</div>

				<Formik
					initialValues={{ name: '', email: '', phone: '', message: '' }}
					validationSchema={schema}
					onSubmit={async (
						{ name, email, phone, message },
						{ setSubmitting, resetForm }
					) => {
						setError(false);
						setSuccess(false);

						try {
							await emailjs.send(
								process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
								process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
								{
									name,
									email,
									phone,
									message,
								},
								process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
							);

							resetForm();
							setSuccess(true);
						} catch {
							setError(true);
						}

						setSubmitting(false);
					}}>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<form onSubmit={handleSubmit} className={styles.form}>
							<h3>{form.heading}</h3>
							<input
								type='name'
								name='name'
								placeholder={`${form.name} *`}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && touched.name && (
								<p className={styles.fieldError}>{errors.name}</p>
							)}
							<input
								type='email'
								name='email'
								placeholder={`${form.email} *`}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && (
								<p className={styles.fieldError}>{errors.email}</p>
							)}

							<div className={styles.phoneInputContainer}>
								{values.phone && <span>+91 </span>}
								<input
									type='phone'
									name='phone'
									placeholder={`${form.phone} *`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
								/>
							</div>

							{errors.phone && touched.phone && (
								<p className={styles.fieldError}>{errors.phone}</p>
							)}
							<textarea
								type='text'
								name='message'
								placeholder={`${form.message} *`}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.message}
							/>
							{errors.message && touched.message && (
								<p className={styles.fieldError}>{errors.message}</p>
							)}
							<button type='submit' disabled={isSubmitting}>
								{isSubmitting ? (
									<BarLoader className={styles.loader} />
								) : (
									form.button
								)}
							</button>
							{isSuccess && (
								<p className={styles.success}>
									{form.validationMessages.success}
								</p>
							)}
							{isError && (
								<p className={styles.error}>{form.validationMessages.error}</p>
							)}
						</form>
					)}
				</Formik>
			</div>
		</section>
	);
};

export default ContactUs;
