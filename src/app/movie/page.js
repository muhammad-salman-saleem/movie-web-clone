import React from "react";
import axios from "axios";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // const url = process.env.RAPID_KEY;
  const url = 'https://netflix54.p.rapidapi.com/search/';

  const options = {
    method: 'GET',
    url: url,
    params: {
      query: 'stranger',
      offset: '0',
      limit_titles: '50',
      limit_suggestions: '20',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '9b3384e2d2msh5d0b4d28e804e11p15f6b6jsn19c623650046',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  

  let main_data = []; 
  try {
    const response = await axios.request(options);
    console.log(response.data);
    const data = response.data;
    main_data = data.titles; 
    console.log(main_data);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
