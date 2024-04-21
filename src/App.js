import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';



const App = () => {
      return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
            </Routes>
        </Router>
    );
};

export default App;
