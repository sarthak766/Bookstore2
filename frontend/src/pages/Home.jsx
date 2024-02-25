import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Spinner from "../components/Spinner";
import Bookscard from "../components/home/Bookscard";
import Bookstable from "../components/home/Bookstable";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype,setShowType]=useState('table');
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore2-one.vercel.app/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  },[]);

  return (
    <div className="p-4" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/books-library-generative-ai_220873-19768.jpg?w=1060')",  backgroundSize: 'cover', backgroundPosition: 'center',height:'100%',width:'100vw',backgroundAttachment: 'fixed' }}>
      <div className="flex justify-center items-center gap-x-4">
           <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={()=>setShowType('table')}
           >
            Table
           </button>
           <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={()=>setShowType('card')}
           >
            Card
           </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white my-8">Books-List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-white text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
          showtype === 'table' ?(<Bookstable books={books}/>):(<Bookscard books={books}/>)       
      )}
    </div>
  );
};

export default Home;
