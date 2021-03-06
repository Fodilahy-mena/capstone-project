import React, { useContext } from 'react';
import Image from '../components/Image';
import {getClass} from '../utils';
import { Context } from '../Context';

function Photos() {
	const { allPhotos }= useContext(Context);
	return (
		<main className="photos">
			{/* <h1>Images go here</h1> */}
			{allPhotos.map((photo, index) => (
				<Image key={photo.id} photo={photo} className={getClass(index)}/>
			))}
			
		</main>
	);
}

export default Photos;
