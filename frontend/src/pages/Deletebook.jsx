import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const Deletebook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/home');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('some error occurred', { variant: 'error' });
        console.log(err);
      });
  };

  return (
    <div className="p-4" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_House_of_Leaves_-_Burning_4.jpg/1200px-The_House_of_Leaves_-_Burning_4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center',height:'100vh',width:'100vw' }}>
      <Backbutton />
      <h1 className="text-3xl my-4 text-white">Delete book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col items-center border-2 bg-white border-sky-400 rounded-xl w-[600px] p-8 mx-auto md:mt-[200px] sm:mt-[150px] mt-150px">
        <h3 className="text-2xl">Are You sure you want to delete Project?</h3>
        <button
          className="p-4 bg-red-700 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes Delete it.
        </button>
      </div>
    </div>
  );
};

export default Deletebook;
