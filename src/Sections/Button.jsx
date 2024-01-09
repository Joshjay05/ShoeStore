// import React from "react";
import PropTypes from "prop-types";
const Button = ({ label, iconURL }) => {
	return (
		<button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-full border-coral-red">
			{label}
			<img
				src={iconURL}
				alt="arrow-right icon"
				className="ml-2 rounded-full w-5 h-5"
			/>
		</button>
	);
};
Button.propTypes = {
	label: PropTypes.string.isRequired,
	iconURL: PropTypes.object.isRequired,
};

export default Button;
