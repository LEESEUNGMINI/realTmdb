import React, { useEffect, useState } from "react";
import Layout from "../conponents/Layout";
import CircularProgress from "../conponents/CircularProgress";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { Link } from "react-router-dom";
import Item from "../conponents/Item";

export default function Movie() {
  const type = "movie";
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // 'https://api.themoviedb.org/3/tv/series_id?language=en-US'
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
        setLists(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="w-[1000px] flex flex-wrap gap-4 ">
          {/* item */}
          {lists?.results?.map((list) => (
            <Item list={list} type={type} />
          ))}
        </div>
        {/* 페이지 네이션 */}
        <div className="py-8">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={lists?.total_pages}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </Layout>
  );
}
