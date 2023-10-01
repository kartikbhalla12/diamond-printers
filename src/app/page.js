import styles from './page.module.scss';
import { mapDataToLinks } from '@utils/sheets';

import Header from '@components/header';
// import Footer from '@components/footer';
import Banner from '@components/banner';
import sheets from '@constants/sheets';

export default async function Home(props) {
	const data = await getContent();
	const header = data[sheets.header];
	const banner = data[sheets.banner];

	return (
		<main className={styles.main}>
			<Header
				button={{
					label: header.button_label,
					link: header.button_link,
				}}
				links={mapDataToLinks({ data: header, max: 6, key: 'nav' })}
			/>
			<Banner
				heading={banner.heading}
				description={banner.description}
				buttons={mapDataToLinks({ data: banner, max: 2, key: 'button' })}
			/>
			{/* <Footer /> */}
		</main>
	);
}

async function getContent() {
	let res = await fetch(`${process.env.URL}/api`);
	const { data } = await res.json();
	return data;
}

export const dynamic = 'force-dynamic';
