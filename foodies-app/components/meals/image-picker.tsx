'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
	const [pickedImage, setPickedImage] = useState<string | null>(null);
	const imageRef = useRef<HTMLInputElement | null>(null);
	const onClickHandler = () => {
		imageRef.current && imageRef.current.click();
	};
	const handlePickedImageChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = e.target.files?.[0];
		if (!file) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			typeof fileReader.result === 'string' &&
				setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image src={pickedImage} fill alt='preview' />
					)}
				</div>
				<input
					className={styles.input}
					type='file'
					id={name}
					name={name}
					accept='image/png, image/jpeg, image/jpg'
					ref={imageRef}
					onChange={handlePickedImageChange}
					required
				/>
			</div>
			<button
				type='button'
				className={styles.button}
				onClick={onClickHandler}>
				Pick an Image
			</button>
		</div>
	);
};

export default ImagePicker;
