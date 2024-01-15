import React from "react";

export default function footer() {
  return (
    <div className="w-full h-[360px] bg-[#03243F] mt-32 flex justify-center">
      <div className="w-full max-w-[600px] flex justify-center text-white space-x-6">
        {/* 왼쪽 */}
        <div className="flex h-full flex-col justify-center flex flex-col space-y-8">
          {/* 이미지 */}
          <div>
            <img
              className="w-[130px] h-[94px] ml-28"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="zz"
            />
          </div>
          {/* 어서오세요 */}
          <div className="w-[252px] h-[45px] bg-white text-[#01B4E6] rounded-xl font-bold text-[18.72px] flex justify-center items-center">
            안녕하세요.dltmdals7295!
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="flex space-x-16">
          <div className="w-[100px] mt-16 ml-4">
            <h2 className="text-[20px] font-bold w-[200px]">THE BASICS</h2>
            <p>TMDb에 대해 </p>
            <p>문의하기</p>
            <p>Support Forums</p>
            <p>API</p>
            <p>System Status</p>
          </div>
          <div className="w-[100px] mt-16">
            <h2 className="text-[20px] font-bold">참여하기</h2>
            <p>기여 지침서</p>
            <p>새 영화 추가</p>
            <p className="w-[200px]">새 TV 프로그램 추가</p>
          </div>
          <div className="w-[100px] mt-16">
            <h2 className="text-[20px] font-bold">커뮤니티</h2>
            <p>가이드라인</p>
            <p>토론 내역</p>
            <p>기여 랭킹</p>
          </div>
          <div className="w-[100px] mt-16">
            <h2 className="text-[20px] font-bold">법적 사항</h2>
            <p>서비스 이용약관</p>
            <p>API Terms of Use</p>
            <p>개인정보약관</p>
            <p>DMCA Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
