import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";

const query = `{
	"topRated": *[_type == "movie"][0..8] {
		title,
		"slug": slug.current,
		rating, 
		"platforms": platforms[]->{
			name,
			"logoUrl": logo.asset->url
		},
		"description": description,
		"posterUrl": poster.asset->url
	} | order(rating desc),
	"recent": *[_type == "movie"][0..8] {
		title,
		"slug": slug.current,
		rating, 
		"platforms": platforms[]->{
			name,
			"logoUrl": logo.asset->url
		},
		"description": description,
		"posterUrl": poster.asset->url
		} 
	| order(releaseDate desc)
}`;

export default async function Home() {
	const movies = await client.fetch(query);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100 dark:bg-[#222]">
			<section className="flex">
				<div>
					<h1 className="text-7xl pb-6">GetURMovie</h1>
					<p className="text-lg">Find the best movies for you!</p>
				</div>
			</section>
			<section className="w-4/5 pt-24">
				<h2 className="text-3xl pb-4">Top Rated Movies</h2>
				<div className="grid grid-cols-3">
					{movies.topRated.map((movie: any) => (
						<Link
							href={`/movies/${movie.slug}`}
							key={movie.slug}
							className="flex flex-col gap-2"
						>
							<Image
								src={movie.posterUrl}
								alt={movie.title}
								width={300}
								height={150}
								style={{
									objectFit: "cover",
									maxWidth: "300px",
									maxHeight: "150px",
								}}
							/>
							<h3 className="text-xl font-semibold">
								{movie.title}
							</h3>
							<p>{movie.rating}</p>
							<p className="text-sm text-gray-50">
								Available on:{" "}
							</p>
							<div className="flex gap-1">
								{movie.platforms.map((platform: any) => (
									<div key={platform.name}>
										<Image
											src={platform.logoUrl}
											alt={platform.name}
											width={50}
											height={50}
										/>
									</div>
								))}
							</div>
						</Link>
					))}
				</div>
			</section>
			<section className="w-4/5 pt-24">
				<h2 className="text-3xl pb-4">Latest Movies</h2>
				<div className="grid grid-cols-3">
					{movies.recent.map((movie: any) => (
						<Link
							href={`/movies/${movie.slug}`}
							key={movie.slug}
							className="flex flex-col gap-2"
						>
							<Image
								src={movie.posterUrl}
								alt={movie.title}
								width={300}
								height={150}
								style={{
									objectFit: "cover",
									maxWidth: "300px",
									maxHeight: "150px",
								}}
							/>
							<h3 className="text-xl font-semibold">
								{movie.title}
							</h3>
							<p>{movie.rating}</p>
							<p className="text-sm text-gray-50">
								Available on:{" "}
							</p>
							<div className="flex gap-1">
								{movie.platforms.map((platform: any) => (
									<div key={platform.name}>
										<Image
											src={platform.logoUrl}
											alt={platform.name}
											width={50}
											height={50}
										/>
									</div>
								))}
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
