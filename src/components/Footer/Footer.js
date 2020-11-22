import React from 'react';
import './Footer.css';
import img1 from '../../athena-design-resources/Illustration/brandLogo.png'
import img2 from '../../athena-design-resources/Illustration/facebook-logo-in-circular-shape@2x.png'
import img3 from '../../athena-design-resources/Illustration/twitter (4)@2x.png'
import img4 from '../../athena-design-resources/Illustration/linkedin (2)@2x.png'
import img5 from '../../athena-design-resources/Illustration/dribbble (1)@2x.png'
const Footer = () => {
	return (
		<section class="footer-area section-padding pb-5 pt-5">
			<div class="container">

				<div class="row d-flex justify-content-center ">
					<div class="col-md-3  text-center">
						<div class="footer-logo">
							<img className="img" src={img1} alt="" />
						</div>
						<div class="single-footer">
							<img src={img2} alt="" />
							<img src={img3} alt="" />
							<img src={img4} alt="" />
							<img src={img5} alt="" />
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>Features</li>
								<li>Enterprise</li>
								<li>Pricing</li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>Blog</li>
								<li>Help Center</li>
								<li>Contact Us</li>
								<li>Status</li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>About Us</li>
								<li>Terms of Service</li>
								<li>Security</li>
								<li>Login</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
			{/* <p className="text-center text-secondary p-2 m-0"><small> © 2020 All rights reserved  ATHENA-DESIGN By Team-84</small></p> */}
		</section>
	);
};

export default Footer;
