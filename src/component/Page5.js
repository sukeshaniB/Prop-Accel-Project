import React from "react";
import {
    Typography
} from "@material-tailwind/react";


export default function Page5() {
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
                        <h2 className="text-lg font-semibold leading-6 text-3xl not-italic font-bold gap-24"> We have what you’re looking for</h2>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a </p>
                    </div>
                    <div class="flex h-20 items-center justify-center">
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Get Started Now
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="text-black">
                <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-left lg:gap-6">
                    <Typography
                        as="li"
                        variant="small"
                        color="blue"
                        className="mb-4 text-2xl font-semibold"
                    >
                        <a href="/" className="float-left ">
                            All Right Reserved @Copyright 2023
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
                                Terms of Service
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
                                Privacy Policy
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
                                Product
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </Typography>
                    </div>
                </ul>
            </div>
        </div>

    );
}