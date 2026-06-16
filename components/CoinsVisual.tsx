import Image from 'next/image'
import coinsImage from '../public/images/coins-stack.png'

export default function CoinsVisual() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full max-w-7xl mx-auto pointer-events-none">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:bottom-0 md:right-0 md:left-auto md:translate-x-0 w-[280px] md:w-[450px]">
                <Image
                    src={coinsImage}
                    alt="Криптовалютні монети"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain opacity-90 md:opacity-100 mix-blend-screen md:mix-blend-normal"
                    priority
                />
            </div>
        </div>
    )
}