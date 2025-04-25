import { Facebook, TwitchIcon, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-100 text-gray-700 mt-10 px-6 py-10 md:px-16 lg:px-24">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Left  */}
				<div>
					<h2 className="text-2xl font-bold text-[#ac0ed4e5]">TutorLink</h2>
					<p className="mt-4 text-sm">
						TutorSheba.com is a platform where parents, students and tutors can
						easily connect with each other. We provide qualified Home/Online
						tutors to help your child with studies and helping them perform
						better in exams.
					</p>
					<div className="flex gap-4 mt-4">
						<Link href="">
							<Facebook className="w-6 h-6 text-blue-600" />
						</Link>
						<Link href="#">
							<TwitchIcon className="w-6 h-6 text-green-600" />
						</Link>
						<Link href="#">
							<Youtube className="w-6 h-6 text-red-600" />
						</Link>
					</div>
				</div>

				{/* Middle*/}
				<div className="grid grid-cols-2 gap-4">
					<div>
						<h3 className="font-semibold">Resources</h3>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<Link href="#">About Us</Link>
							</li>
							<li>
								<Link href="#">Our Team</Link>
							</li>
							<li>
								<Link href="#">Products</Link>
							</li>
							<li>
								<Link href="#">Contact</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">More</h3>
						<ul className="mt-2 space-y-2 text-sm">
							<li>
								<Link href="#">Privacy</Link>
							</li>
							<li>
								<Link href="#">Help</Link>
							</li>
							<li>
								<Link href="#">Terms</Link>
							</li>
							<li>
								<Link href="#">FAQ</Link>
							</li>
							<li>
								<Link href="#">Pay Now</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Right */}
				<div className="text-center md:text-left">
					<h3 className="font-semibold">Download Our Mobile App</h3>
					<p className="text-sm mt-2">
						Our Android App is available right now. Scan the QR Code or Click
						the Button to Download.
					</p>
					<div className="mt-4 flex justify-center md:justify-start">
						<Image
							src="https://i.ibb.co.com/mVf1LTS5/cda2f385c49db1eefb330012f18b0c0e.png"
							alt="QR Code"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</div>

			<div className="mt-10 text-center text-sm border-t pt-4">
				<p>Copyright © 2025. Tutor SyneX all rights reserved</p>
				<div className="flex justify-center gap-4 mt-2">
					<Link href="#">Privacy Policy</Link>
					<Link href="#">Security</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
