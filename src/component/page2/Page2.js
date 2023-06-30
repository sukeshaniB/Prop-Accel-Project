import React from "react";
import {
  Typography
} from "@material-tailwind/react";

export default function Page2() {
  const imageURL = "https://thumbs.dreamstime.com/b/panoramic-view-watzmann-east-face-panoramic-view-watzmann-east-face-beautiful-sunny-day-summer-berchtesgadener-land-194094273.jpg"


  return (
    <>
      <div className="imag">
        <div

          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
          style={{
            backgroundImage: `url(${imageURL})`, height: "1000px", width: "100%"
          }}>

          <div className="flex-1 max-w-5x1 p-16">
            <div className="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense">
              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <h2 className="text-lg font-semibold leading-6">Interactive Features</h2>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <h2 className="text-lg font-semibold leading-6">Interactive Features</h2>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
              <div className="p-4 pr-6 bg-white border-1-8 border-teal-400 rounded-md shadow-md space-y-2">
                <h2 className="text-lg font-semibold leading-6">Interactive Features</h2>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>


              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <h2 className="text-lg font-semibold leading-6">Interactive Features</h2>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>



























          <div className="inline-flex flex-col items-start gap-8">
            <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
              <h2 className="text-5xl not-italic font-bold">Interactive Features</h2>
              <p className=" text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
            </div>
            <button
              type="button"
              className=" bg-blue-500 hover:bg-blue-700 rounded border-2 border-neutral-50 px-8 pb-[9px] pt-[9px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-black mb-1 text-4xl font-semibold"
              data-te-ripple-init
              data-te-ripple-color="light">
              Explore Now
            </button>
          </div>




        </div>

      </div>

    </>
  );
}