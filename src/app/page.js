import Header from '@components/header';
// import Footer from '@components/footer';
import Banner from '@components/banner';
import Process from '@components/process';
import Testimonials from '@components/testimonials';
import ContactUs from '@components/contactUs';
import Clients from '@components/clients';
import Printing from '@components/printing';
import PriceEstimator from '@components/priceEstimator';

import { combineKeyValuePairs } from '@utils/sheets';

import styles from './page.module.scss';

export default async function Home(props) {
	const {
		header,
		banner,
		process,
		testimonials,
		contactUs,
		clients,
		printingTypes,
		pricing,
	} = await getContent();

	return (
		<main className={styles.main}>
			<Header
				button={{
					label: header.button_label,
					link: header.button_link,
				}}
				links={combineKeyValuePairs({
					data: header,
					max: 6,
					key: 'nav',
					types: ['label', 'link'],
				})}
			/>
			<Banner
				heading={banner.heading}
				description={banner.description}
				buttons={combineKeyValuePairs({
					data: banner,
					max: 2,
					key: 'button',
					types: ['label', 'link'],
				})}
			/>
			{/* <Footer /> */}
			<Process
				heading={process.heading}
				steps={combineKeyValuePairs({
					data: process,
					max: 3,
					key: 'step',
					types: ['label', 'description'],
				})}
			/>
			<Testimonials
				heading={testimonials.heading}
				testimonials={combineKeyValuePairs({
					data: testimonials,
					max: 6,
					key: 'testimonial',
					types: ['message', 'name', 'client'],
				})}
			/>
			<ContactUs
				heading={contactUs.heading}
				description={contactUs.description}
				address={{
					label: contactUs.address_label,
					link: contactUs.address_link,
				}}
				email={{ label: contactUs.email_label, value: contactUs.email_value }}
				phone={{ label: contactUs.phone_label, value: contactUs.phone_value }}
				form={{
					heading: contactUs.form_heading,
					name: contactUs.form_name_label,
					phone: contactUs.form_phone_label,
					email: contactUs.form_email_label,
					button: contactUs.form_button_label,
					message: contactUs.form_message_label,
					validationMessages: {
						success: contactUs.form_success_label,
						error: contactUs.form_error_label,
					},
				}}
			/>
			<Clients
				heading={clients.heading}
				description={clients.description}
				clients={combineKeyValuePairs({
					data: clients,
					max: 8,
					key: 'client',
					types: ['id'],
				}).map(({ id }) => id)}
			/>
			<Printing
				heading={printingTypes.heading}
				description={printingTypes.description}
				types={combineKeyValuePairs({
					data: printingTypes,
					max: 8,
					key: 'printing',
					types: ['id', 'label'],
				})}
			/>
			<PriceEstimator
				heading={pricing.heading}
				description={pricing.description}
				disclaimer={pricing.disclaimer}
				fields={{
					material: {
						title: pricing.material_title,
						values: combineKeyValuePairs({
							data: pricing,
							max: 5,
							key: 'material',
							types: ['label', 'value'],
						}),
					},
					printing: {
						title: pricing.printing_title,
						values: combineKeyValuePairs({
							data: pricing,
							max: 8,
							key: 'printing',
							types: ['label', 'value'],
						}),
					},
					cardboard: {
						title: pricing.cardboard_title,
						values: combineKeyValuePairs({
							data: pricing,
							max: 8,
							key: 'cardboard',
							types: ['label', 'value'],
						}),
					},
					dimensions: {
						title: pricing.dimensions_title,
						height: pricing.dimensions_height_title,
						width: pricing.dimensions_width_title,
						length: pricing.dimensions_length_title,
					},
					quantity: {
						title: pricing.quantity_title,
						min: pricing.quantity_minimum_value,
					},
					lamination: {
						title: pricing.lamination_title,
						values: combineKeyValuePairs({
							data: pricing,
							max: 5,
							key: 'lamination',
							types: ['label', 'value'],
						}),
					},
				}}
			/>
		</main>
	);
}

async function getContent() {
	let res = await fetch(`${process.env.URL}/api/content`);
	const { data } = await res.json();

	return data;
}

export const dynamic = 'force-dynamic';
