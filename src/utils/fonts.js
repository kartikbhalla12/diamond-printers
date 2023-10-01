import { Lato, League_Spartan } from 'next/font/google';

export const lato = Lato({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lato',
	weight: ['100', '300', '400', '700', '900'],
});

export const leagueSpartan = League_Spartan({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-league-spartan',
});
