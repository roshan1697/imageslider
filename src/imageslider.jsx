import React from 'react'
import { useState,useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { imageData } from './data'
import './imageslider.css'

const ImageSlider = () => {
	const [index, setIndex] = useState(0)
	useEffect(() => {
		document.documentElement.style.setProperty('--bgColor', imageData[index].bgcolor)
	},[index])

  return (
    <div className='slider'>
      <img
					className='heroimage'
					src={imageData[index].src}
					alt={imageData[index].alt}
				/>

				<BsFillArrowLeftCircleFill
					className='leftarrow'
					onClick={() =>
						setIndex(
							index === 0
								? imageData.length - 1
								: index - 1
						)
					}
				/>
				<BsFillArrowRightCircleFill
					className='rightarrow'
					onClick={() =>
						setIndex(
							index === imageData.length - 1
								? 0
								: index + 1
						)
					}
				/>
    </div>
  )
}

export default ImageSlider