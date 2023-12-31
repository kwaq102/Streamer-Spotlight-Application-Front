import React, { useContext } from "react";
import OneStreamerCard from "./OneStreamerCard";
import { StreamerContext } from "../../App";
import ErrorInfo from "../ErrorInfo";
import Loader from "../loader/Loader";

interface Props {
	errorInfo: boolean;
	refreshStreamers: () => void;
	loader: boolean;
}
const ListStreamers = ({ refreshStreamers, errorInfo, loader }: Props) => {
	const context = useContext(StreamerContext);
	const { streamers } = context;

	const displayAllStreamers = streamers.map(streamer => (
		<OneStreamerCard
			key={streamer._id}
			id={streamer._id}
			name={streamer.name}
			platform={streamer.platform}
			description={streamer.description}
			upvotes={streamer.upvotes}
			downvotes={streamer.downvotes}
			refreshStreamers={refreshStreamers}
		/>
	));

	return (
		<section className="allStreamers">
			<h2 className="allStreamers__heading H2">Streamers List</h2>
			<div className="allStreamers__listWrapper">
				{loader && <Loader />}
				{!errorInfo ? (
					displayAllStreamers
				) : (
					<ErrorInfo
						text="Failed to server, please try again later..."
						classNameFromProps="allStreamers__listWrapper__errorInfo"
					/>
				)}
			</div>
		</section>
	);
};

export default ListStreamers;
