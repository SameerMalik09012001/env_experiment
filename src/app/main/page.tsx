import React from "react";

const page = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center text-[40px]">
			<p>
				ENV Variable:
				<span className="text-green-500">{`  ${process.env.NEXT_APP_API_KEY}`}</span>
			</p>
		</div>
	);
};

export default page;
