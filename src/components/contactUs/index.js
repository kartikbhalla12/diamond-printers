'use client';

import Image from 'next/image';
import { Formik } from 'formik';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';

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

const ContactUs = ({ heading }) => {
	return (
		<div className={styles.contactUs}>
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
					<h2>The Gateway to Packaging Excellence</h2>
					<p className={styles.subHeading}>
						Ready to Elevate Your Packaging? Contact Us Here
					</p>

					<div className={styles.details}>
						<div className={styles.detail}>
							<Location />
							<a
								href='https://www.google.co.in/maps/place/Diamond+Printers,+54%2FA6,+Rama+Rd,+Kirti+Nagar+Industrial+Area,+Najafgarh+Road+Industrial+Area,+New+Delhi,+Delhi,+110015/@28.6558985,77.1602759,13z/data=!4m6!3m5!1s0x390d03368b727b45:0x763615338350add9!8m2!3d28.6610458!4d77.155487!16s%2Fg%2F11rk5dwqm4'
								target='_blank'
								className={styles.location}>
								Sec-4, Rajiv Chowk, Delhi,203453
							</a>
						</div>
						<div className={styles.detail}>
							<Phone />

							<a href='tel:+918887772922'>+91 984-543-4356</a>
						</div>
						<div className={styles.detail}>
							<Mail />
							<a href='mailto:diamondprints@xyz.com'>diamondprints@xyz.com</a>
						</div>
					</div>
				</div>

				<Formik
					initialValues={{ name: '', email: '', phone: '', message: '' }}
					validationSchema={schema}
					onSubmit={async (
						{ name, email, phone, message },
						{ setSubmitting }
					) => {
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
							alert('success');
						} catch {
							alert('failed');
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
							<h3>Need to Make an Enquiry?</h3>
							<input
								type='name'
								name='name'
								placeholder='Your Name *'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && touched.name && <p>{errors.name}</p>}
							<input
								type='email'
								name='email'
								placeholder='Email *'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && <p>{errors.email}</p>}

							<div className={styles.phoneInputContainer}>
								{values.phone && <span>+91 </span>}
								<input
									type='phone'
									name='phone'
									placeholder='Phone *'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
									prefix='+91'
								/>
							</div>

							{errors.phone && touched.phone && <p>{errors.phone}</p>}
							<textarea
								type='text'
								name='message'
								placeholder='Drop your enquiry here *'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.message}
							/>
							{errors.message && touched.message && <p>{errors.message}</p>}
							<button type='submit' disabled={isSubmitting}>
								Submit Message
							</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ContactUs;
