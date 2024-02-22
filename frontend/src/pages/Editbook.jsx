import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import {useSnackbar} from 'notistack'
const Editbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar}= useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert('An error occurred, check console');
        console.error(err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios.put(`http://localhost:4000/books/${id}`, data) // Assuming you're updating an existing book
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully',{variant: 'success'});
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('An error occurred',{variant: 'error'});
        console.error(err);
      });
  };

  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading && <Spinner />}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-4xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-4xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-4xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='rounded-md bg-blue-800 hover:bg-red-500 w-22 h-10 text-white hover:text-black' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  );
}

export default Editbook;
