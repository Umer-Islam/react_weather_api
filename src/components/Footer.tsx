export default function Footer() {
	return (
		<>
			<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
				<aside>
					<p>Copyright © {new Date().getFullYear()}</p>
				</aside>
			</footer>
		</>
	);
}
