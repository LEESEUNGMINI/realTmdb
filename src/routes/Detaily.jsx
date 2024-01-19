import React, { useEffect, useState } from "react";
import Layout from "../conponents/Layout";
import { useParams, useLocation } from "react-router-dom";
import ChangeRuntime from "../lib/ChangeRuntime";
import CircularProgress from "../conponents/CircularProgress";

export default function Detaily() {
  const { id } = useParams();
  const [data, setData] = useState();
  const location = useLocation();
  console.log(location.state.type);

  console.log(id);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${location.state.type}/${id}?language=en-US`;

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
        setData(json);
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);

  return (
    <Layout>
      <div className="w-full h-[100px]"></div>
      <div className=" relative w-full h-[500px] flex justify-center">
        <div className=" absolute top-0 left-0 w-full h-full">
          {/* backdrop 이미지 */}
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            alt="backImage"
          />
        </div>
        {/* 필터 기능 div */}
        <div className=" absolute top-0 left-0 w-full h-full bg-gray-900/90 flex justify-center">
          {/* 왼쪽 이미지 */}
          <div className="w-[1300px] h-full flex">
            <div className="w-1/4 h-full flex items-center">
              <div className="w-full h-[80%] ">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                  alt="mainImage"
                />
              </div>
            </div>
            {/* 오른쪽 설명 */}
            <div className="w-3/4 h-full flex flex-col justify-center text-white">
              <div className="flex items-center space-x-2">
                <h1 className="text-[35px] font-bold">{data?.title}</h1>
                <h2 className="text-2xl">
                  ({data?.release_date.split("-")[0]})
                </h2>
              </div>
              {/* 장르 러닝타임 */}
              <div className="flex space-x-2">
                {/* 개봉일 */}
                <span>{data?.release_date.replaceAll("-", "/")}</span>
                {/* 구분자 */}
                <span>·</span>
                {/* 장르 */}
                <span>
                  {data?.genres?.map((genre) => (
                    <span>{genre.name} </span>
                  ))}
                </span>
                {/* 러닝타임*/}
                <span>{ChangeRuntime(data?.runtime)}</span>
              </div>
              {/* favorite */}
              <div>
                {" "}
                <CircularProgress rate={Math.floor(data?.vote_average * 10)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
