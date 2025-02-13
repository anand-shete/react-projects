import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  // fetching data from github api using useEffect
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/anand-shete/followers")
  //     .then((res) => res.json())
  //     .then((body) => setData(body))
  //     .catch((err) => console.error("Error in fetching Github API", err));
  // }, []);

  // fetching data from loader using useLoaderData hook which uses loader
  const data = useLoaderData();
  // console.log(data);
  
  return (
    <div className="p-4 bg-orange-300 text-center text-3xl">
      <h1>GitHub Followers: {data.length} </h1>

      {data.length > 0 ? (
        data.map((follower) => (
          <div key={follower.id}>
            <p>{follower.login}</p>
            <img src={follower.avatar_url} alt="Git Profile pic" width={100} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export async function GitHubLoader() {
  const res = await fetch("https://api.github.com/users/anand-shete/followers");
  return res.json();
}
