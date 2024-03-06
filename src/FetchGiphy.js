import { useState } from 'react'
import AddCategory from './components/AddCategory'
import DisplayGiphys from './components/DisplayGiphys';

function FetchGiphy() {
  const [category, setCategory] = useState("");

  return (
    <div className="container">
      <center><h2>Search Gifs</h2></center>
      <AddCategory setCategory={setCategory} />
      <DisplayGiphys category={category} />
    </div>
  )
}

export default FetchGiphy