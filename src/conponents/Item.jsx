import React from "react";
import CircularProgress from "./CircularProgress";
import { Link } from "react-router-dom";

export default function Item({ list, type }) {
  console.log(type);
  return (
    <div
      key={list.id}
      className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden"
    >
      {/* 위: 그림 */}
      <Link to={`/detail/${list.id}`} state={{ type: `${type}` }} key={list.id}>
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
        <h2 className="font-semibold">
          {list.title ? list.title : list.name.substr(0, 19)}
        </h2>
        <p className="text-sm">
          {list.release_date ? list.release_date : list.first_air_date}
        </p>
        {/* 좋아요 평가 */}
        <div className=" absolute -top-6 left-2 ">
          <CircularProgress rate={Math.floor(list.vote_average * 10)} />
        </div>
      </div>
    </div>
  );
}
