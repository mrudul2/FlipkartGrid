import * as React from "react";
import { Link } from "react-router-dom";

import comparazonLogo from "../../images/final-logo.png";

export default function Footer() {
	return (
		<div>
			<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Link to="/" className="flex items-center">
						<img
							src={comparazonLogo}
							width={150}
							height={90}
							alt="comparazon"
							className="pt-2"
						/>
					</Link>
					<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<Link to="/about" className="mr-4 hover:underline md:mr-6 ">
								About
							</Link>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					<Link to="/" className="hover:underline">
						Comparazon™
					</Link>
					. All Rights Reserved.
				</span>
			</footer>
		</div>
	);
}
