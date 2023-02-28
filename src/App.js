import logo from './logo.svg';
//import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import Tweets from './components/Tweets';
import ColdEmails from './components/ColdEmails';
import {Helmet} from "react-helmet";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
     <div className="App">
     <Helmet>
                <meta charSet="utf-8" />
                <title>LikhoAI</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navigation/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/product-description" exact element={<ProductDescription/>}/>
        <Route path="/cold-emails" exact element={<ColdEmails/>}/>
        <Route path="/tweets" exact element={<Tweets/>}/>
      </Routes>
     
    </div>
   </Router>
  );
}

export default App;
