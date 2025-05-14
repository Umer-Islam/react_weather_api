import { useEffect, useState } from "react";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Problem from "./components/Problem";

function App() {
	const [city, setCity] = useState<string>("tashkent");
	const [data, setData] = useState({
		location: {
			name: "London",
			region: "City of London, Greater London",
			country: "United Kingdom",
			lat: 51.5171,
			lon: -0.1062,
			tz_id: "Europe/London",
			localtime_epoch: 1747219983,
			localtime: "2025-05-14 11:53",
		},
		current: {
			last_updated_epoch: 1747219500,
			last_updated: "2025-05-14 11:45",
			temp_c: 19.2,
			temp_f: 66.6,
			is_day: 1,
			condition: {
				text: "Sunny",
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
				code: 1000,
			},
			wind_mph: 9.6,
			wind_kph: 15.5,
			wind_degree: 52,
			wind_dir: "NE",
			pressure_mb: 1021,
			pressure_in: 30.15,
			precip_mm: 0,
			precip_in: 0,
			humidity: 43,
			cloud: 0,
			feelslike_c: 19.2,
			feelslike_f: 66.6,
			windchill_c: 20.2,
			windchill_f: 68.3,
			heatindex_c: 20.2,
			heatindex_f: 68.3,
			dewpoint_c: 5.5,
			dewpoint_f: 41.9,
			vis_km: 10,
			vis_miles: 6,
			uv: 4.6,
			gust_mph: 11.1,
			gust_kph: 17.8,
		},
	});
	const url = `http://api.weatherapi.com/v1/current.json?key=${
		import.meta.env.VITE_WEATHER_API_KEY
	}&q=${city}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((info) => {
				setData(info);
			})
			.catch((err) => {
				console.log(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city]);
	function handleSubmit(event: {
		preventDefault: () => void;
		currentTarget: HTMLFormElement | undefined;
	}) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const location = formData.get("location");
		if (typeof location === "string") {
			setCity(location);
		}

		// console.log('form submitted value of location is :' + location)
	}

	return (
		<>
			<Header />
			<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto mt-5 sm:mt-auto">
				<legend className="fieldset-legend">City</legend>
				<form className="join " onSubmit={handleSubmit}>
					<input
						type="text"
						className="input join-item"
						name="location"
						placeholder="Washington"
						required
					/>
					<button className="btn bg-accent  join-item  ">submit</button>
				</form>
			</fieldset>
			{data ? <DisplayData data={data} /> : <Problem />}
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

			<Footer />
		</>
	);
}

export default App;
