function ImageSliderText ( {sliderTitle, sliderText, sliderMainButton, sliderSecButton} : {sliderTitle: string, sliderText: string, sliderMainButton: string, sliderSecButton: string }) {
    return (<div className="relative float-left-mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-active data-te-carousel-item>
        <img src="https://images.unsplash.com/photo-1609348978663-f6ef98731322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="block w-full object-cover h-screen brightness-50" alt="..."/>
        <div className="absolute inset-x-[15%] bottom-20 py-5 text-center text-white block">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{sliderTitle}</h1>
                <p className="mt-6 text-lg leading-8 text-white-600">{sliderText}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-blue-700 hover:bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{sliderMainButton}</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white-900">{sliderSecButton}
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    </div>);
}

export default ImageSliderText