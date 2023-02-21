import { useState, useEffect } from "react";

// import hooks
import { useFetch } from "../../hooks/useFetch";

// import components
import Follower from "../Follower/Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) nextPage = 0;
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((currPage) => {
      let prevPage = currPage - 1;
      if (prevPage < 0) prevPage = data.length - 1;
      return prevPage;
    });
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  key={index}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
