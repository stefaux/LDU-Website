import ImageSliderText from "../HomePage/ImageSliderText";

function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
}

function ImageSlider() {

    const sliderTitle1 = "Do you want to improve your debating skills?";
    const sliderText1 = "Meet the amazing debatters at the Leiden Debating Union";
    const sliderMainButton1 = "Get to know us";
    const sliderSecButton1 = "Learn more" 

    return (
<div id = "carouselExampleCaptions" className = "relative h-screen" data-te-carousel-init data-te-carousel-slide >
{/*<!--Carousel indicators-->*/} 
<div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators></div>

{/*<!--Carousel items-->*/}
<div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/*<!--First item-->*/}
    <ImageSliderText sliderTitle={sliderTitle1} sliderText={sliderText1} sliderMainButton={sliderMainButton1} sliderSecButton={sliderSecButton1}/>
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
