import Image from "next/image"

export default function HeroOne() {
    return (
        <>
            <main>
                <div className="hero-one">
                    <h1>Browse The Range</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="hero-one-image">
                    <div>
                        <Image src="/Dining.png" alt="Dining Image" width={250} height={250}/>
                        <p>Living</p>
                    </div>
                </div>
            </main>
        </>


    )
}