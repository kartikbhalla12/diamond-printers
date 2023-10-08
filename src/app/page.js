import styles from './page.module.scss';

import Header from '@components/header';
// import Footer from '@components/footer';
import Banner from '@components/banner';
import Process from '@components/process';
import Testimonials from '@components/testimonials';
import ContactUs from '@components/contactUs';

import { combineKeyValuePairs } from '@utils/sheets';

export default async function Home(props) {
	const { header, banner, process, testimonials } = await getContent();

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
			<ContactUs />
		</main>
	);
}

async function getContent() {
	let res = await fetch(`${process.env.URL}/api`);
	const { data } = await res.json();
	return data;
}

export const dynamic = 'force-dynamic';
