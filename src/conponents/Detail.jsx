import React from "react";
import Layout from "./Layout";

export default function Detail() {
  return (
    <Layout>
      <div className="w-full h-full">
        {/* 메뉴 */}
        <div className="w-full h-[50px] ">메뉴</div>
        {/* 메인소개 */}
        <div className="w-full bg-[#1F1327]">
          {/* 이미지 */}
          <div className="max-w-[1300px] flex justify-between p-16">
            <div>
              <img
                src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cFOpMbj28ZKhXDy50mrIcLhLb8g.jpg"
                alt=""
              />
            </div>

            <div></div>
          </div>
          {/* 우측 내용들 */}
          <div>
            {/* 왼쪽 */}
            <div></div>
            <div></div>
          </div>
          {/* 우측 */}
          <div>나폴레옹</div>
          <div>회원점수 , 트레일러 재생</div>
          <div>스스로가 황제가 된 영웅</div>
        </div>
        {/* 주요출연진 */}
        <div className="w-full h-[1383px]"></div>
      </div>
    </Layout>
  );
}
