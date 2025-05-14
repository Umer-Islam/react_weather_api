export default function Problem() {
	return (
		<>
			<div className="card card-dash bg-base-100 w-96 border border-white mx-auto mt-4">
				<div className="card-body">
					<h2 className="card-title text-center mx-auto text-red-300">Error</h2>
					<p className="text-center">Please reload the page</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">
							<a href="/">Refresh</a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
