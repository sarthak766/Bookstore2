import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
function BookModel({book,onClose} ) {
  return (
    <div
      className="bg-black fixed bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      Books Model
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <FaPencilAlt className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <CiUser className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">About Book </p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
          ut numquam accusamus adipisci fugit laboriosam! Laborum, impedit
          molestias. Esse laborum ea cum?
        </p>
      </div>
    </div>
  );
}

export default BookModel;
