import React from "react";
import Rogo from "./rogo.png";
import { FaPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaUserLarge } from "react-icons/fa6";

export default function NavPage() {
  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
      {/* 중앙정렬된 컨테이너 */}
      <div className="max-w-[1300px] w-full h-full  flex justify-between">
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className="h-full  flex ">
          {/* 로고 */}
          <Link to="/">
            <div className="h-full w-[100px] items-center">
              <img className="h-[55px]" src={Rogo} alt="rogo" />
            </div>
          </Link>
          {/* 메뉴 */}
          <div className="h-full  flex items-center text-white font-bold space-x-6">
            <Link to="/movie">
              <p>Movies</p>
            </Link>
            <Link to="/tv">
              <p>TV Shows</p>
            </Link>
            <p>People</p>
            <p>more</p>
          </div>
        </div>
        {/* 오른쪽: 아이콘 영역 */}
        <div className="flex h-full space-x-6 items-center">
          {/* 플러스 버튼 */}
          <div className="text-white">
            <FaPlus />
          </div>
          <div>
            {/* 랭귀지 선택 */}
            <div className="border border-white text-white cursor-pointer p-1 text-xs hover:bg-white hover:text-[#032541] ">
              EN
            </div>
          </div>
          <div className="text-white">
            {/* 벨 아이콘 */}
            <FaBell />
          </div>
          <div className="text-white w-7 h-7 bg-green-700 rounded-full flex justify-center items-center">
            {/* 유저 */}M{/* <FaUserLarge /> */}
          </div>
          <div className="text-[#01B4E4]">
            {/* 서치 */}
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
