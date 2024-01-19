import { useEffect, useState } from "react";
import Layout from "../conponents/Layout";
import Item from "../conponents/Item";

export default function TV() {
  const type = "tv";
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };
  const fetchData = (pageNumber = 1) => {
    // `https://api.themoviedb.org/3/tv/series_id?language=en-US&page=${page}`
    const url =
      `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${pageNumber}`
        ? `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${pageNumber}`
        : `https://api.themoviedb.org/3/tv/series_id?language=en-US&page=${pageNumber}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUzZjE5OGQ1ZmE4MzBmMDZjMDVmYjlmM2QxZDQyNSIsInN1YiI6IjY1OWNhMjI1NjJmY2QzMDFhM2ExMDFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neJc4czdDQ6i924C59Pecw3JOMrrubb2YG4gLNrHUFY",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLists((prev) => [...prev, ...json.results]);
      })
      .catch((err) => console.error("error:" + err));
  };
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="w-[1000px] flex flex-wrap justify-center gap-4 ">
          {/* item */}
          {lists?.map((list) => (
            <Item list={list} type={type} />
          ))}
          {/* Load More */}
          <div
            onClick={handleLoadMore}
            className="w-[97%] py-3 bg-[#01b4e4] text-white font-semibold text-center hover:text-black cursor-pointer "
          >
            Load More
          </div>
        </div>
      </div>
    </Layout>
  );
}
