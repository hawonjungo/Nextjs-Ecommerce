"use client"
import Image from 'next/image'
import React from 'react'

const images = [{ id: 1, url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ id: 2, url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ id: 3, url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ id: 4, url: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }];

const ProductImages = () => {
    const [index, setIndex] = React.useState(0);
    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image src={images[index].url}
                    alt='Product Image'
                    fill
                    sizes="50vw"
                    className='object-cover rounded-md'
                />
            </div>
                <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
                    {images.map((img, index) => (
                        <div key = {img.id} className='w-1/4 h-32 relative gap-4 mt-8' onClick={() => setIndex(index)}>
                            <Image src={img.url}
                                alt='Product Image'
                                fill
                                sizes="30vw"
                                className='object-cover rounded-md'
                            />
                        </div>
                    ))}

                </div>
         
        </div>
    )
}

export default ProductImages