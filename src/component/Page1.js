import React from "react";
import {
  Typography
} from "@material-tailwind/react";

export default function Page1() {
  const imageURL = "https://thumbs.dreamstime.com/b/panoramic-view-watzmann-east-face-panoramic-view-watzmann-east-face-beautiful-sunny-day-summer-berchtesgadener-land-194094273.jpg"


  return (
    <>
  <div className="imag">
      <div
      
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url(${imageURL})`, height: "1000px", width: "100%"
        }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        >

          <div className="text-black">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-left lg:gap-6">
              <Typography
                as="li"
                variant="small"
                color="blue"
                className="mb-4 text-2xl font-semibold"
              >
                <a href="/" className="float-left ">
                  Logo
                </a>
              </Typography>
              <div class="float-right text-black-800">
                <Typography
                  as="li"
                  variant="small"
                  color="blue"
                  className="mb-4 text-2xl font-semibold"
                >
                  <a href="/" className="flex items-center">
                    About
                  </a>
                </Typography>
              </div>
              <div class="float-right text-black-800">
                <Typography
                  as="li"
                  variant="small"
                  color="blue"
                  className="mb-4 text-2xl font-semibold"
                >
                  <a href="/" className="flex items-center">
                    Pricing
                  </a>
                </Typography>
              </div>
              <div class="absolute right-5 text-black-600">
                <Typography
                  as="li"
                  variant="small"
                  color="blue"
                  className="mb-4 text-2xl font-semibold"
                >
                  <a href="/" className="flex items-left">
                    Review
                  </a>
                </Typography>
              </div>
            </ul>
          </div>
        </div>
        <div className=" w-5/12  flex-shrink-0">
          <div className="text-black">
            <h2 className="mb-1 text-4xl font-semibold">Learn how to launch a successful podcast</h2>
            <p className="flex  w-100 gap-y-4 h-16 flex-col flex-shrink-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-8 pb-[9px] pt-[9px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-black mb-1 text-4xl font-semibold"
              data-te-ripple-init
              data-te-ripple-color="light">
              Sign up Now
            </button>
          </div>
        </div>

<div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
        <img align='right'src="https://upload.wikimedia.org/wikipedia/commons/6/64/Alberobello_BW_2016-10-16_13-43-03.jpg" alt="Trulli" width="400" height="333"/>


        <img align='right'
  src="https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"
  class="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
  alt="..." />
        </div>
        </div>

        </div>

    </>
  );
}