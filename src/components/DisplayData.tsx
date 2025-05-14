// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DisplayData(props: { data: { location: { region: any; country: any; localtime: any; }; current: { condition?: any; temp_c?: any; temp_f?: any; }; }; }) {
	const { region, country, localtime } = props.data.location;
	const { temp_c, temp_f } = props.data.current;
	const { text, icon } = props.data.current.condition;
	return (
		<>
			<div className="card bg-base-100 w-[50%] min-w-{300px} max-w-2xl  shadow-sm border border-white mx-auto mt-5">
				<div className="card-body">
					<h2 className="card-title mx-auto text-primary  text-3xl">
						{region ? region : "loading....."}, {country}
					</h2>
					<p className="text-2xl  pt-3 text-center">{localtime}</p>
					<div className="text-center flex flex-row gap-10  pt-3">
						<p className="border  bg-primary rounded-2xl font-bold text-white m-0 p-0 text-2xl">
							{temp_f} &#8457;
						</p>
						<p className="border  bg-primary rounded-2xl font-bold text-white m-0 p-0 text-2xl">
							{temp_c} &#8451;{" "}
						</p>
					</div>
					<div className="mx-auto flex flex-row items-center gap-3 pt-3">
						<p className="text-3xl">{text}</p>
						<img src={icon} alt="" width={80} height={80} />
					</div>
				</div>
			</div>
		</>
	);
}
