import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const Showbooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://bookstore2-one.vercel.app/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
     <div
    className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md h-full max-h-full overflow-auto bg-white rounded-xl p-8 flex flex-col relative shadow-lg"
    >
      <AiOutlineClose
        className="absolute top-4 right-4 text-gray-600 cursor-pointer"
        onClick={onClose}
      />
      <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg text-white">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-600 text-lg">{book._id}</h4>
      <div className="flex items-center gap-x-2">
        <FaPencilAlt className="text-red-400 text-xl" />
        <h2 className="my-1 text-xl font-semibold">{book.title}</h2>
      </div>
      <div className="flex items-center gap-x-2">
        <CiUser className="text-red-400 text-xl" />
        <h2 className="my-1 text-xl font-semibold">{book.author}</h2>
      </div>
      <p className="mt-4 text-gray-700 font-medium">About Book:</p>
      <p className="my-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
        ut numquam accusamus adipisci fugit laboriosam! Laborum, impedit
        molestias. Esse laborum ea cum?
      </p>
    </div>
  </div>
  );
};

export default Showbooks;
