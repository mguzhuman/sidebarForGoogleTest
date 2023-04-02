import React from 'react';
type SlideDataBoxProps = {
	text: string;
	type: string;
}
const TextBlock = ({text, type}:SlideDataBoxProps) => {

	return (
		<div>
			<h3>Type: {type}</h3>
			<h3>Text: {text}</h3>
		</div>
	);
};

export default TextBlock;
