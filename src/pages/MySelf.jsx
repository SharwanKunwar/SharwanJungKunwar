import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import BookCard from "../components/BookCard";
import { books } from "../data/books.js";
import BlogPage from "../pages/BlogPage.jsx";
import { blogs } from "../data/blogs";
import MyLocationMap from "../components/MyLocationMap.jsx";

export default function MySelf({ username = "SharwanKunwar" }) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        setProfile(userData);

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
        );
        const repoData = await repoRes.json();
        setRepos(repoData);

        const totalStars = repoData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0,
        );

        const totalForks = repoData.reduce(
          (acc, repo) => acc + repo.forks_count,
          0,
        );

        setStats({
          stars: totalStars,
          forks: totalForks,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }

    fetchGithubData();
  }, [username]);

  if (!profile) {
    return <p className="text-center mt-10">Loading Developer Data...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-25 px-2">
      {/* Video Banner */}
      <div className="h-[300px] mb-10">
        <video
          src="/video/video.mp4"
          autoPlay
          loop
          className="w-full h-full object-cover rounded-xl mastOrangeShadow"
        />
      </div>

      {/* Profile Section */}
      <div className="md:flex gap-1">
        {/* Image */}
        <div className="md:w-[30%]">
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="md:w-[350px] md:h-[410px] rounded-xl border-2 mb-3 border-indigo-500 shadow-lg object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-[70%] md:p-5">
          <h2 className="md:text-3xl text-2xl font-bold">{profile.name}</h2>
          <p className="text-neutral-400 mt-2">{profile.bio}</p>

          {/* GitHub Heatmap */}
          <div className="rounded-md mastShadow p-2 my-4">
            <GitHubCalendar
              username={username}
              year={new Date().getFullYear()}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-3">
            <StatCard label="Public Repos" value={profile.public_repos} />
            <StatCard label="Followers" value={profile.followers} />
            <StatCard label="Total Stars" value={stats.stars} />
            <StatCard label="Total Forks" value={stats.forks} />
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className=" my-10 flex-wrap rounded-md p-3 text-black">
        <h1 className="font-medium mb-3 text-xl">My Favorite Books</h1>

        <div className="md:flex gap-3 flex-wrap">
          {books.map((item, index) => (
            <BookCard
              key={index}
              imgPath={item.imgPath}
              title={item.title}
              description={item.description}
              bookUrl={item.bookUrl}
            />
          ))}
        </div>
      </div>

      {/* Blogs */}
      <div className="bg-linear-to-br from-sky-200 to-pink-400 mb-5 rounded-md px-5 p-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl">My Blogs</h1>
        </div>

        <section className="flex flex-col gap-3">
          {blogs.map((item) => (
            <BlogPage
              key={item.id}
              img={item.img}
              id={item.id}
              title={item.title}
              des={item.des}
            />
          ))}
        </section>
      </div>

      {/* // map div  ----------------------------------*/}
      <div className=" mb-5 ">
        {/* <MyLocationMap/> */}
      </div>

    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-gray-50/30 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-md">
      <p className="text-3xl font-bold text-indigo-400">{value}</p>
      <p className="text-sm text-neutral-400 mt-2">{label}</p>
    </div>
  );
}
