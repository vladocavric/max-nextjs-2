'use client';

const Error = ({ error }: { error: Error }) => {
	return (
		<div className='error'>
			<h1>an error occurred</h1>
			<p>Failed to fetch mail data. Please try again later</p>
		</div>
	);
};

export default Error;
