function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
}

function ImageSlider() {

    return (<div id="carouselExampleCaptions" class="relative h-screen" data-te-carousel-init data-te-carousel-slide>
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
            <button onClick={scrollToBottom}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </button>
        </div>

        <div class="relative w-full h-screen overflow-hidden after:clear-both after:block after:content-['']">
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-active data-te-carousel-item styles="backface-visibility: hidden">
                <img src="https://images.unsplash.com/photo-1609348978663-f6ef98731322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="block w-full" alt="..."/>

                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">First slide label</h5>
                    <p>
                        Some representative placeholder content for the first slide.
                    </p>
                </div>
            </div>
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item styles="backface-visibility: hidden">
                <img src="https://images.unsplash.com/photo-1576025816600-756e7df7d0b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="block w-full" alt="..."/>

                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Second slide label</h5>
                    <p>
                        Some representative placeholder content for the second slide.
                    </p>
                </div>
            </div>
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item styles="backface-visibility: hidden">
                <img src="https://images.unsplash.com/photo-1589552724452-f0ccaadfdbd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" class="block w-full" alt="..."/>

                <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>
                        Some representative placeholder content for the third slide.
                    </p>
                </div>
            </div>
        </div>

        <button class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <button class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>);
}
export default ImageSlider;
