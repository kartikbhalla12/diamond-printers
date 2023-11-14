import Header from '@components/header';
// import Footer from '@components/footer';
import Banner from '@components/banner';
import Process from '@components/process';
import Testimonials from '@components/testimonials';
import ContactUs from '@components/contactUs';
import Clients from '@components/clients';
import Printing from '@components/printing';
import PriceEstimator from '@components/priceEstimator';
import Gallery from '@components/gallery';
import Cardboard from '@components/cardboard';

import { combineKeyValuePairs } from '@utils/sheets';

import styles from './page.module.scss';
import About from '@components/about';

export default async function Home(props) {
	const {
		header,
		banner,
		process,
		testimonials,
		contactUs,
		clients,
		printingTypes,
		priceEstimator,
		gallery,
		cardboardTypes,
		priceCombinations,
		aboutUs,
	} = await getContent();

	// console.log(Object.entries(priceCombinations).map(([combination, price]) => ({combination: combination, price})))

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
				logo={{
					id: header.logo_id,
					alt: header.logo_alt,
				}}
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

			<About
				heading={aboutUs.heading}
				description={aboutUs.description}
				banner={aboutUs.banner}
				stats={combineKeyValuePairs({
					data: aboutUs,
					max: 3,
					key: 'stats',
					types: ['title', 'description', 'count'],
				})}
			/>
			<Gallery
				heading={gallery.heading}
				photos={combineKeyValuePairs({
					data: gallery,
					max: 12,
					key: 'image',
					types: ['id', 'label', 'orientation'],
				})}
			/>
			<Process
				heading={process.heading}
				steps={combineKeyValuePairs({
					data: process,
					max: 3,
					key: 'step',
					types: ['label', 'description'],
				})}
			/>

			<Cardboard
				types={combineKeyValuePairs({
					data: cardboardTypes,
					max: 8,
					key: 'cardboard',
					types: ['id', 'label', 'description'],
				})}
				heading={cardboardTypes.heading}
				description={cardboardTypes.description}
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

			<PriceEstimator
				visible={priceEstimator.visible.toLowerCase() === 'true'}
				heading={priceEstimator.heading}
				description={priceEstimator.description}
				disclaimer={priceEstimator.disclaimer}
				fields={{
					material: {
						title: priceEstimator.material_title,
						values: combineKeyValuePairs({
							data: priceEstimator,
							max: 5,
							key: 'material',
							types: ['label', 'code'],
						}),
					},
					cardboard: {
						title: priceEstimator.cardboard_title,
						values: combineKeyValuePairs({
							data: priceEstimator,
							max: 8,
							key: 'cardboard',
							types: ['label', 'materials', 'code'],
						}),
					},
					printing: {
						title: priceEstimator.printing_title,
						values: combineKeyValuePairs({
							data: priceEstimator,
							max: 8,
							key: 'printing',
							types: ['label', 'materials', 'code'],
						}),
					},
					lamination: {
						title: priceEstimator.lamination_title,
						values: combineKeyValuePairs({
							data: priceEstimator,
							max: 5,
							key: 'lamination',
							types: ['label', 'materials', 'printing', 'code'],
						}),
					},
					dimensions: {
						title: priceEstimator.dimensions_title,
						height: priceEstimator.dimensions_height_title,
						width: priceEstimator.dimensions_width_title,
						length: priceEstimator.dimensions_length_title,
					},
					quantity: {
						title: priceEstimator.quantity_title,
						min: priceEstimator.quantity_minimum_value,
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
		</main>
	);
}

async function getContent() {
	let res = await fetch(`${process.env.URL}/api/content`);
	const { data } = await res.json();

	return data;
}

export const dynamic = 'force-dynamic';
