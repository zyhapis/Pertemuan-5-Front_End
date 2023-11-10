import React from "react";
import styles from "./Movies.module.css";

const Movies = () => {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Five Nights at Freddy's</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BMjljYTFlYWUtN2I2Zi00NmEyLWI1MzQtY2U1OWI2M2IwNmZjXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Fall of the House of Usher</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Killers of the Flower Moon</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BMWNkZGNhYzQtY2I4MS00NDQ0LThmYzctNDk5NmEwMzE0MzU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Bodies</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BYTY0YTgwZjUtYzJiNy00ZDQ2LWFlZmItZThhMjExMjI5YWQ2XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Loki</h3>
            <p className={styles.movie__date}>2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Shingeki no Kyojin</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://e0.pxfuel.com/wallpapers/104/660/desktop-wallpaper-interstellar-interstellar-movie-poster-background-film-poster-thumbnail.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Interstellar</h3>
            <p className={styles.movie__date}>2014</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://wallpapercave.com/wp/wp1839578.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Stranger Things</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Super Mario Bros</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Marvel's</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
