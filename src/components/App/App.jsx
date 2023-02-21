import { useState, useEffect } from "react";

// import hooks
import { useFetch } from "../../hooks/useFetch";

// import components
import Follower from "../Follower/Follower";

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {data.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
