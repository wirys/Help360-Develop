import React from 'react';

import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';

export default function Footer() {
	return (
		<footer className="site-footer text-light">
			<div className="container">
				<div className="site-footer-inner">
					<NavLinks className="footer-links" />
					<SocialLinks className="footer-social-links" />
					<div className="footer-copyright">
						&copy; 2021 Ideal Sistemas , todos direitos reservados
					</div>
				</div>
			</div>
		</footer>
	);
}
