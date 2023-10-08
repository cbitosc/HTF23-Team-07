import React from "react";
import Image from "next/image";

import { client } from "@/sanity/client";
import { Castoro } from "next/font/google";

export default async function MoviePage({
	params,
}: {
	params: { slug: string };
}) {
	const movie = await client.fetch(
		`*[_type == "movie" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            rating,
            "platforms": platforms[]->{
                name,
                "logoUrl": logo.asset->url
            },
            "director": director -> {
                name,
                photoUrl: photo.asset->url
            },
            "description": description,
            "posterUrl": poster.asset->url
            releaseDate,
            genres,
            runtime,
            "cast": castMembers[]->{
                characterName,
                "name": person->name,
            },
            "trailerUrl": trailerUrl,
            "gallery": glimpses[]->{
                "url": asset->url,
            },
            reviews[]->{
                author,
                title,
                body,
                rating,
            }
        }`,
		{
			slug: params.slug,
		}
	);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100 dark:bg-[#222]">
			<h1>{movie.title}</h1>
			<Image src={movie.posterUrl} alt={movie.title} />
			<p>Rating: {movie.rating} / 10</p>
			<p>Release Date: {movie.releaseDate}</p>
			<p>Genres: {movie.genres.join(", ")}</p>
			<p>Runtime: {movie.runtime} minutes</p>
			<p>Director: {movie.director.name}</p>
			<Image src={movie.diretor.photoUrl} alt={movie.director.name} />
			<p>Cast:</p>
			{movie.cast.map((member: any) => (
				<div key={member}>
					<p>{member.name}</p>
					<p>{member.characterName}</p>
				</div>
			))}
			<div className="flex overflow-x-scroll">
				{movie.gallery.map((image: any) => (
					<Image src={image.url} alt={movie.title} key={image.url} />
				))}
			</div>
			<p>Trailer:</p>
			<iframe src={movie.trailerUrl} />
			<p>Reviews:</p>
			{movie.reviews.map((review: any) => (
				<div key={review.title}>
					<p>{review.title}</p>
					<p>{review.body}</p>
					<p>{review.rating} / 5</p>
				</div>
			))}
		</main>
	);
}
