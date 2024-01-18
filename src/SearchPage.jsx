import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [keyword, setKeyWord] = useState("");
  const handleClick = () => {
    navigate(`/search?keyword=${keyword}`);
  };

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };
  return (
    <div className="w-full flex justify-center ">
      {/* 이미지 div */}
      <div className="w-[1300px] h-[300px] bg-[url('https://plus.unsplash.com/premium_photo-1664356873951-6a056a304c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative flex px-8 py-12">
        {/* 컨테이너 */}
        <div className=" z-10 w-full h-full text-white flex flex-col justify-between">
          {/* 텍스트 */}
          <div className=" -space-y-3">
            <h1 className="text-[48px]">Welcome.</h1>
            <h2 className="text-[32px]">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          {/* 검색 창  */}
          <div className=" relative">
            <input
              onChange={handleChange}
              className="w-full py-3 px-4 text-gray-900 outline-none rounded-3xl"
              type="text"
              placeholder="Search for movie, TV show, person ..."
            />
            <button
              onClick={handleClick}
              className=" bg-red-500 px-6 py-3 rounded-3xl absolute right-0 bg-gradient-to-r from-[#1AD0B3] via-[#0EC3C9] to-[#04B7DD] font-semibold hover:text-black "
            >
              Search
            </button>
          </div>
        </div>
        {/* absolute 가상 요소 */}
        <div className=" absolute top-0 left-0 w-full h-full  bg-blue-800/70 "></div>
      </div>
    </div>
  );
}
