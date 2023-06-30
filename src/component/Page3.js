import React from "react";
export default function Page3() {
    const imageURL3 = "https://thumbs.dreamstime.com/b/panoramic-view-watzmann-east-face-panoramic-view-watzmann-east-face-beautiful-sunny-day-summer-berchtesgadener-land-194094273.jpg"



    return (

        <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
            style={{
                backgroundImage: `url(${imageURL3})`, height: "1000px", width: "100%"
            }}>
            <div class="flex h-25 items-center justify-center">
                <div class="text-black">
                    <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                        <h2 className="text-lg font-semibold leading-6 text-3xl not-italic font-bold gap-24">Choose your plan</h2>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div class="flex h-20 items-center justify-center">
                        <button
                            type="button"
                            class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Monthly
                        </button>
                        <button
                            type="button"
                            class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Yearly
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-5x1 p-16">
                <div className="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense lg:grid-cols-3">
                    <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                        <h2 className="text-lg font-semibold leading-6">Basic Plan</h2>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <h5 className="text-black">$ 54 /month</h5>

                        <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-black-400">
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                    <div className="p-4 pr-6 bg-fuchsia-900 border-1-8 border-transparent rounded-md shadow-md space-y-2">
                        <h2 className="text-lg font-semibold leading-6">Basic Plan</h2>
                        <p className="text-black-600">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <h5 className="text-black">$ 54 /month</h5>

                        <ul class="space-y-4 text-black-500 list-disc list-inside dark:text-black-400">
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div>
                            <button class="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                    <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                        <h2 className="text-lg font-semibold leading-6">Basic Plan</h2>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <h5 className="text-black">$ 54 /month</h5>

                        <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-black-400">
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Start Free Trial
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}