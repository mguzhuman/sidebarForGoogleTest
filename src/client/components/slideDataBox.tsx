import React, {useState, useEffect} from 'react';
import TextBlock from "./textBlock";

type DataResponse = {
	text: string;
	type: string;
}
const SlideDataBox = (): JSX.Element => {
	const [type, setType]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('')
	const [text, setText]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('')

	const getData = () => {
		// @ts-ignore
		google.script.run
			.withSuccessHandler((data: DataResponse) => {
				setType(data.type)
				setText(data.text)
			})
			.withFailureHandler((error) => alert(error))
			.getObjectData()
	}

	useEffect(() => {
		const intervalID = window.setInterval(() => {
			getData()
		}, 500);
		return () => window.clearInterval(intervalID);
	}, []);

	return (
		<div className='sidebar'>
			<TextBlock text={text} type={type}/>
		</div>
	);
};

export default SlideDataBox;
