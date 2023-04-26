function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
}

function ImageSlider() {

    return (
<div id = "carouselExampleCaptions" className = "relative h-screen" data-te-carousel-init data-te-carousel-slide >
{/*<!--Carousel indicators-->*/} 
<div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators></div>

{/*<!--Carousel items-->*/}
<div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/*<!--First item-->*/}
    <div className="relative float-left-mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-active data-te-carousel-item>
        <img src="https://images.unsplash.com/photo-1609348978663-f6ef98731322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="block w-full object-cover h-screen brightness-50" alt="..."/>
        <div className="absolute inset-x-[15%] bottom-20 py-5 text-center text-white block">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Do you want to improve your debating skills?</h1>
                <p className="mt-6 text-lg leading-8 text-white-600">Meet the amazing debatters at the Leiden Debating Union</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-blue-700 hover:bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white-900">Learn more
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/*<!--Second item-->*/}
    <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item >
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" className="block w-full" alt="..."/>
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>
                Some representative placeholder content for the second slide.
            </p>
        </div>
    </div>
    {/*<!--Third item-->*/}
    <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" className="block w-full" alt="..."/>
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Third slide label</h5>
            <p>
                Some representative placeholder content for the third slide.
            </p>
        </div>
    </div>
</div>

{/*<!--Carousel controls - prev item-->*/}
<button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
    <span className="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
</button>
{/*<!--Carousel controls - next item-->*/}
<button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
    <span className="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
</button></div>);

}
export default ImageSlider;
