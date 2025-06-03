import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 py-12 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">JunGo</div>
          </Link>
          <p>
            Cabramatta Road West, Mount Pritchart, NSW 2170, Australia
          </p>
          <span className="font-semibold">jungo@gmail.com</span>
          <span className="font-semibold">+61 42415 ****</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            <Image src="/instagram.png" alt="Facebook" width={16} height={16} />
            <Image src="/youtube.png" alt="Facebook" width={16} height={16} />
            <Image src="/x.png" alt="Facebook" width={16} height={16} />

          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
                    <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
                    <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="">Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email address" className="p-4 w-3/4"/>
            <button className="w-1/4 bg-watermelon text-white"> JOIN</button>            
          </div>
          <span>Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={20} />
            <Image src="/paypal.png" alt="Paypal" width={40} height={20} />
            <Image src="/skrill.png" alt="Paypal" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
        <div className="">© 2025 JunGo SHOP</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Australia</span>
          </div>
           <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ AUD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer