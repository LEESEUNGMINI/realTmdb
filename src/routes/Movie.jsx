import React, { useEffect, useState } from "react";
import Layout from "../conponents/Layout";
import CircularProgress from "../conponents/CircularProgress";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { Link } from "react-router-dom";

export default function Movie() {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
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
            <div
              key={list.id}
              className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden"
            >
              {/* 위: 그림 */}
              <Link to={`/detail/${list.id}`} key={list.id}>
                <div className="w-full h-[250px] bg-blue-500">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      `${list.poster_path}`
                        ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                        : `https://plus.unsplash.com/premium_photo-1661573719277-7674c20ff80c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTk1JUJEJUVDJTk4JUE0JUVCJUE1JUI0JUVCJThBJTk0fGVufDB8fDB8fHww`
                    }
                    alt="movieList"
                  />
                </div>
              </Link>
              {/* 아래 : 내용 */}
              <div className=" relative w-full h-[90px] pt-4 px-2 ">
                <h2 className="font-semibold">{list.title.substr(0, 19)}</h2>
                <p className="text-sm">{list.release_date}</p>
                {/* 좋아요 평가 */}
                <div className=" absolute -top-6 left-2 ">
                  <CircularProgress rate={Math.floor(list.vote_average * 10)} />
                </div>
              </div>
            </div>
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
