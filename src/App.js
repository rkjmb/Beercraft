import { useState, useEffect } from 'react';
import axios from 'axios';

import config from './config';

import Beerbrand from './components/Beerbrand';
import Pagination from './components/Pagination';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [page, setpage] = useState(1)
  const [beerDetails, setbeerDetails] = useState([])
  const [images, setimages] = useState([])
  const [totalPages, settotalPages] = useState(0);
  const [pageData, setpageData] = useState([]);
  const [searchText, setsearchText] = useState("");

  const getBeerdetailsAPI = async () => {
    let response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json');
    setbeerDetails(response.data)
  }

  const getImagesAPI = async () => {
    let response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json');
    setimages(response.data)
  }

  useEffect(() => {
    getImagesAPI();
    getBeerdetailsAPI();
  }, [])

  useEffect(() => {
    if (beerDetails.length !== 0 && !searchText.match((/[.*+?^=!:${}()|[\]/\\]/g))) {
      let pageDetails = [];
      pageDetails = beerDetails.slice((page - 1) * config.itemsPerPage, (page) * config.itemsPerPage).filter(b => b.name.match(new RegExp(searchText, 'i')))
      setpageData(pageDetails);
    }
  }, [page, beerDetails, searchText])

  useEffect(() => {
    settotalPages(Math.ceil(beerDetails.length / config.itemsPerPage))
  }, [beerDetails])

  return (
    <div className="App">
      <div className="positionSticky">
        <h1>
          Beercraft
        </h1>
        <Search setsearchText={setsearchText} />
        <Pagination setpage={setpage} page={page} totalPages={totalPages} />
      </div>
      {pageData?.length ?
        <div className='main'>
          {pageData.map((berrBrand, index) => <Beerbrand src={images[(index % images.length)]?.image} key={berrBrand.id} berrBrand={berrBrand} />)}
        </div>
        : searchText && <div className="noResult"><h3>{`No Beer found by the name "${searchText}"`}</h3></div>
      }
    </div >
  );
}

export default App;
