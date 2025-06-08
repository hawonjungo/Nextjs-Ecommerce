import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8  gap-y-16 justify-between flex-wrap">
            <Link href="/product" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-watermelon text-watermelon py-2 px-4 w-max text-xs hover:bg-watermelon hover:text-white">Add Cart</button>
            </Link>
            <Link href="/product" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-watermelon text-watermelon py-2 px-4 w-max text-xs hover:bg-watermelon hover:text-white">Add Cart</button>
            </Link>
            <Link href="/product" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-watermelon text-watermelon py-2 px-4 w-max text-xs hover:bg-watermelon hover:text-white">Add Cart</button>
            </Link>
            <Link href="/product" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image
                        src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md" />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-medium">$49</span>
                </div>
                <div className="text-sm text-gray-500">Description</div>
                <button className="rounded-2xl ring-1 ring-watermelon text-watermelon py-2 px-4 w-max text-xs hover:bg-watermelon hover:text-white">Add Cart</button>
            </Link>

        </div>
    )
}

export default ProductList