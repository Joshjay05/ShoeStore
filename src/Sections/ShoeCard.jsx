// import React from 'react'
import PropTypes from "prop-types";
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg !== imgURL.bigShoe) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	};
	return (
		<section
			className={`border-2 rounded-xl 
    ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
    
    `}
			onClick={handleClick}>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img
					src={imgURL.thumbnail}
					alt="shoe.collection"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</section>
	);
};
ShoeCard.propTypes = {
	imgURL: PropTypes.string,
	changeBigShoeImage: PropTypes.object.isRequired,
	bigShoeImg: PropTypes.object,
};
export default ShoeCard;
