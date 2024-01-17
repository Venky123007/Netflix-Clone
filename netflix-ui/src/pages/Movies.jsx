import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import styled from 'styled-components';
import Slider from "../components/Slider";
import { onAuthStateChanged } from 'firebase/auth';
import SelectGenre from '../components/SelectGenre';

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem; 
    }
  }
`;


export default function Movies() {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
  
    useEffect(() => {
      dispatch(getGenres());
    },[]);
  
    useEffect(() => {
      if(genresLoaded) dispatch(fetchMovies({type:"movies"}))
    }, [genresLoaded])
  
    window.onscroll = () => {
      setIsScrolled(window.scrollY == 0 ? false : true);
      return () => (window.onscroll = null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
        //   if (currentUser) navigate("/");
        });
    
        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
      }, [navigate]);
  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="movie" />
            {
                movies.length ? <Slider movies={movies} /> : <NotAvailable />
            }
        </div>
    </Container>
  )
}
