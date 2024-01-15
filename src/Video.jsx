import React from "react";

export default function Video() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1300px] h-[500px] bg-gray-500 mt-[100px] bg-cover overflow-scroll flex ">
        <h2 className="text-white font-bold text-[26px] px-6 py-4">
          최신 예고편
        </h2>
        <div className="w-[400px] h-[400px] flex flex-col items-center border border-black justify-center mx-5">
          <div>
            <img
              src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center text-center mt-3">
            <h2 className="text-[20px] font-bold text-white">
              로 앤 오더: 성범죄 전담반
            </h2>
            <p className="text-white">
              [로앤오더 성범죄전담반 시즌23] 공식 예고 <br /> 편 | 웨이브
              해외시리즈
            </p>
          </div>
        </div>
        <div className="w-[400px] h-[400px] flex flex-col items-center border border-black justify-center mx-5">
          <div>
            <img
              src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center text-center mt-3">
            <h2 className="text-[20px] font-bold text-white">
              로 앤 오더: 성범죄 전담반
            </h2>
            <p className="text-white">
              [로앤오더 성범죄전담반 시즌23] 공식 예고 <br /> 편 | 웨이브
              해외시리즈
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
