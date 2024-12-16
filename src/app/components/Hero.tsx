import Image from "next/image"

export default function Hero() {
    return (
        <section className="bg-gray-50 w-full">
            <div className="container flex items-center min-w-full">
                {/* Left Section - image */}
                <div className="flex h-[716px]">
                    <img
                        src="/chair-image.png" alt="image"
                        className="min-w-full"
                    />
                </div>

                {/* Right section - content */}
                <div className="heroUpperDiv bg-[#FFF3E3] w-[643px] h-[443px]"></div>
                <div className="heroUpperDiv bg-[#FFF3E3] w-[561px] h-[344px]">
                    <div className="p-8 pt-20">
                        <p className="text-gray-600 uppercase">
                            New Arrival
                        </p>
                        <h1 className="text-4xl font-bold text-[#B88E2F] leading-tight">
                            Discover Our New Collection
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis.
                        </p>
                        <button className="mt-6 px-6 p-3 'px-11' bg-yellow-600 text-white  shadow hover:bg-yellow-500">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}