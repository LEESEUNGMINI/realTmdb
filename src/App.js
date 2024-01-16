import SearchPage from "./SearchPage";
import Trending from "./Trending";
import Video from "./Video";
import Layout from "./conponents/Layout";

function App() {
  return (
    <div>
      <Layout>
        {/* 검색영역 */}
        <SearchPage />
        {/* Trending */}
        <Trending />
        {/* video */}
        <Video />
        {/*  */}
        <Trending />
        {/* 푸터 */}
      </Layout>
    </div>
  );
}

export default App;
