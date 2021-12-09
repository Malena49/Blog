// == Import
import React from 'react';
// Composants
import Header from '../Header'
import Posts from '../Posts';
import Footer from '../Footer';
import { useState,useEffect } from 'react';
// data, styles et utilitaires
import './styles.scss';
import axios from 'axios';
import Spinner from '../Spinner'
import categoriesData from '../data/categories'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from '../NotFound'

// == Composant
const Blog = () => {
  const [mode, setmode] = useState(true)
  const [postsdata, setpostsdata] = useState([])
  const [loading, setloading] = useState(false)
  const [route, setRoute] = useState(categoriesData[0].route)
  const [label, setLabel] = useState("Accueil")
  

 useEffect(() => {
  const Postsfunction = () => {
    setloading(true)

    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
  .then(function (response) {
    // handle success
    if(label === "Accueil"){
      setpostsdata(response.data)
    } else {
      setpostsdata(response.data.filter((article) => article.category === label))
    }
    setTimeout(() => {
      setloading(false)
    }, 1000);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
    Postsfunction();
 }, [label])
  return (
   
<Router>
    <div className="blog">
   
    <Header mode={mode} setmode={setmode} categoriesData={categoriesData} setLabel={setLabel} setRoute={setRoute} route={route}/>
      
      { loading ?  <Spinner/> : <Routes> { categoriesData.map((cat) => <Route key={cat.label} path={cat.route} element={<Posts postsData={postsdata} mode={mode} />} /> )} 
      
      <Route path="*" element={<NotFound/>} />
       </Routes>
}

      <Footer />

    
     
     
 
  
    </div>
     </Router>
  );
};

// == Export
export default Blog;
