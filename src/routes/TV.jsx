import Layout from "../conponents/Layout";

export default function TV() {
  const url = "https://api.themoviedb.org/3/tv/changes?page=1";
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
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
  return <Layout>tv</Layout>;
}
