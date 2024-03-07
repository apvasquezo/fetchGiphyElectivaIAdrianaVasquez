import { useState } from 'react'
import AddCategory from './components/AddCategory'
import DisplayGiphys from './components/DisplayGiphys';
import logo from './img/Search_Gifs.gif'

function FetchGiphy() {
  const [category, setCategory] = useState("");

  return (
    <div className="container">
      <br />
      <center>
        <img src={logo} alt='' />
      </center>
      <br />
      <AddCategory setCategory={setCategory} />
      <DisplayGiphys category={category} />
    </div>
  )
}

export default FetchGiphy