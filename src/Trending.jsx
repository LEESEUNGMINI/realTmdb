import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Trending() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let tabs = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "person", label: "People" },
    { id: "tv", label: "TV" },
  ];

  const [activeTab, setActivateTab] = useState(tabs[0].id);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUzZjE5OGQ1ZmE4MzBmMDZjMDVmYjlmM2QxZDQyNSIsInN1YiI6IjY1OWNhMjI1NjJmY2QzMDFhM2ExMDFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neJc4czdDQ6i924C59Pecw3JOMrrubb2YG4gLNrHUFY",
      },
    };

    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLists(json?.results.slice(0, 20));
        console.log(json);
      })
      .catch((err) => console.error("error:" + err));
    // fetch 요청이 끝나면 isLoading 값을 false
    setIsLoading(false);
  }, [activeTab]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1300px] h-[400px] pt-8 ">
        {/* 타이틀 */}
        <div className="flex">
          <h2 className="px-4 py-2 font-semibold text-[24px]">Trending</h2>
          {/* 탭바 */}

          <h2 className="px-4 py-2 font-semibold text-[24px]"></h2>

          <div className=" border-2 border-gray-900 rounded-3xl h-[46px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivateTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "text-white" : "text-black"
                } relative rounded-full px-6 py-2 text-xl font-semibold transition`}
              >
                {activeTab == tab.id && (
                  <motion.span
                    layoutId="bubble"
                    tansition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className=" absolute inset-0 bg-gray-900 rounded-full -z-10"
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* 리스트 */}

        <div className="relative flex overflow-x-scroll bg-main">
          {lists.map((item) => (
            <div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col mr-6"
            >
              <div className="w-[200px] h-[230px]">
                <Link to={`/detail/${item.id}`} key={item.id}>
                  <img
                    className="w-full h-[250px] object-cover rounded-xl mb-3 z-10"
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w400${item.poster_path}`
                        : `https://image.tmdb.org/t/p/w400${item.profile_path}`
                    }
                    alt={item.title}
                  />{" "}
                </Link>
              </div>
              <div className="bg-gray-500 p-[1px] h-[40px] w-[40px] flex items-center justify-center rounded-full text-white font-semibold mb-2">
                {Math.floor(Math.random() * 50) + 50}%
              </div>
              <h2 className="font-bold mb-1">
                {item.title ? item.title : item.original_name}
              </h2>
              <p>{item.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
