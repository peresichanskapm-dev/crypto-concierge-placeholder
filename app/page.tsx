import Image from 'next/image'
import Link from 'next/link'

export default function DesktopEmptyState() {
    return (
        <div className="relative w-full min-h-screen bg-[#010101] flex items-center justify-center overflow-hidden p-4 md:p-8">

            <div className="absolute -top-[15%] -right-[10%] w-[60vw] h-[60vw] md:w-[700px] md:h-[550px]
        bg-gradient-to-r from-[#178A6D] via-[#00AA63]/40 to-[#046950]/20
        mix-blend-plus-lighter blur-[100px] md:blur-[120px] rounded-full pointer-events-none opacity-80"
            />

            <div className="absolute -bottom-[15%] -left-[10%] w-[65vw] h-[65vw] md:w-[800px] md:h-[650px]
        bg-gradient-to-r from-[#178A6D] via-[#00AA63]/30 to-[#046950]/30
        mix-blend-plus-lighter blur-[110px] md:blur-[130px] rounded-full pointer-events-none opacity-80"
            />

            <div className="absolute top-[5%] right-[25%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]
        bg-[#178A6D]/30 mix-blend-plus-lighter blur-[70px] md:blur-[95px] rounded-full pointer-events-none"
            />

            <div className="absolute top-[30%] -left-[8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px]
        bg-[#00AA63]/20 mix-blend-plus-lighter blur-[80px] md:blur-[110px] rounded-full pointer-events-none"
            />

            <div className="absolute bottom-[8%] left-[10%] w-[200px] h-[200px] md:w-[350px] md:h-[350px]
        bg-[#046950]/40 mix-blend-plus-lighter blur-[70px] md:blur-[90px] rounded-full pointer-events-none"
            />

            <div className="absolute top-[50%] right-[-8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px]
        bg-[#00AA7E]/25 mix-blend-plus-lighter blur-[80px] md:blur-[100px] rounded-full pointer-events-none"
            />

            <div className="absolute bottom-0 right-0 lg:-right-[2%] w-[230px] sm:w-[330px] md:w-[459px] pointer-events-none z-10 select-none">
                <Image
                    src="/placeholder/images/coins-stack.png"
                    alt="Монети"
                    width={459}
                    height={473}
                    className="w-full h-auto object-contain block"
                    priority
                />
            </div>

            <main
                className="relative z-20 w-full max-w-[1200px] min-h-[520px] md:min-h-[620px]
        flex flex-col items-center p-6 md:p-12 md:pb-16
        border border-white/10 rounded-2xl md:rounded-[16px]
        shadow-[0_0_41px_rgba(255,255,255,0.12)] backdrop-blur-[22.65px]"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(253, 253, 253, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="flex-1 flex flex-col justify-center items-start w-full max-w-[712px]">
                    <h1 className="text-left text-3xl md:text-[48px] font-normal leading-[1.2] tracking-[-0.02em] uppercase text-white mb-6 md:mb-8 w-full">
                        Опишіть вашу задачу — <br className="hidden md:block" /> ми запропонуємо рішення
                    </h1>

                    <p className="text-left text-base md:text-[24px] font-normal leading-[1.2] tracking-[-0.02em] text-white w-full">
                        Підбираємо <span className="text-[#86E1B9] font-medium">оптимальний сценарій під кожен запит:</span> від обміну USDT до міжнародних переказів, оплат та інших фінансових операцій.
                    </p>
                </div>

                <div className="w-full flex justify-center mt-8 animate-levitate">
                    <Link
                        href="https://t.me/your_telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-[18px] w-full max-w-[295px] h-[56px]
            rounded-[46px] border border-[#86E1B9] text-white font-bold text-[16px]
            transition-all duration-500 ease-out hover:brightness-110
            shadow-[0_0_10px_rgba(134,225,185,0.1)] hover:shadow-[0_0_30px_rgba(134,225,185,0.6)] hover:border-[#a0f0d2]"
                        style={{
                            background: `linear-gradient(90deg, rgba(50, 187, 153, 0.37) 0%, rgba(1, 107, 80, 0.37) 37%, rgba(1, 107, 80, 0.37) 71%, rgba(3, 255, 192, 0.37) 100%)`
                        }}
                    >
                        Обговорити задачу

                        <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                            <path
                                d="M21.6114 0.173822C21.6114 0.173822 23.7967 -0.678366 23.6139 1.39107C23.5537 2.24326 23.0075 5.2262 22.5823 8.45213L21.1254 18.009C21.1254 18.009 21.0039 19.4091 19.911 19.6526C18.8186 19.8956 17.1795 18.8004 16.8757 18.5569C16.6327 18.3741 12.3229 15.6347 10.8052 14.2959C10.38 13.9303 9.89398 13.2002 10.866 12.348L17.2402 6.26063C17.9687 5.52938 18.6971 3.82501 15.6619 5.89501L7.16248 11.6775C7.16248 11.6775 6.19104 12.2867 4.37023 11.7388L0.423728 10.521C0.423728 10.521 -1.03315 9.60807 1.45592 8.69514C7.52698 5.83426 14.9942 2.91263 21.6109 0.17326"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>
                </div>

            </main>
        </div>
    )
}