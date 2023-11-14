'use client';

// import cn from 'classnames';

// import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Image from 'next/image';

import Facebook from '@icons/facebook';
import Instagram from '@icons/instagram';
import Twitter from '@icons/twitter';

const Footer = () => {
	return (
		<footer className='' style={{ backgroundColor: '#edf4e4' }} id='footer'>
			<div className='pb-3'>
				<div className='row-cols-1  row-cols-md-5 py-5 mb-3 border-bottom '>
					<div className='d-flex flex-column mb-5 col-md-6 align-items-center  align-items-md-start'>
						{/* <Navbar.Brand href={'headerContent.logo.href'}>
							<Image
								priority
								src={'/logo.webp'}
								className='mb-3'
								width={200}
								height={84}
								alt={'headerContent.logo.alt'}
								quality={100}
							/>
						</Navbar.Brand> */}
						<p style={{ maxWidth: 200 }} className='text-center text-md-start'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
							sunt.
						</p>
						<div style={{ display: 'flex', gap: 20 }}>
							<Twitter style={{ height: 20, strokeWidth: 2 }} />
							<Instagram style={{ height: 20, strokeWidth: 2 }} />
							<Facebook style={{ height: 20, strokeWidth: 2 }} />
						</div>
					</div>

					{/* <Col className="mb-3"></Col> */}

					<div className='mb-3 col-md-2 d-flex align-items-center flex-column align-items-md-start'>
						<h5>Section</h5>
						<ul className='nav flex-column text-center text-md-start'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									About
								</a>
							</li>
						</ul>
					</div>

					<div className='mb-3 col-md-2 d-flex align-items-center flex-column align-items-md-start'>
						<h5>Section</h5>
						<ul className='nav flex-column text-center text-md-start'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									About
								</a>
							</li>
						</ul>
					</div>

					<div className='mb-3 col-md-2 d-flex align-items-center flex-column align-items-md-start'>
						<h5>Section</h5>
						<ul className='nav flex-column text-center text-md-start'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-muted'>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className='text-center text-muted'>© 2023 Diamond Printers, Inc</p>
			</div>
		</footer>
	);
};

export default Footer;
