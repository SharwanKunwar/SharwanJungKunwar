import React, { useEffect, useState } from "react";

export default function MySelf({ username }) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/SharwanKunwar`
        );
        const userData = await userRes.json();
        setProfile(userData);

        const repoRes = await fetch(
          `https://api.github.com/users/SharwanKunwar/repos?per_page=100`
        );
        const repoData = await repoRes.json();
        setRepos(repoData);

        const totalStars = repoData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        const totalForks = repoData.reduce(
          (acc, repo) => acc + repo.forks_count,
          0
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
    <div className="max-w-6xl mx-auto mt-25 px-6 ">
        <div className="h-[300px] mb-10 ">
            <video src="/video/video.mp4" autoPlay loop  className="w-full h-full object-cover rounded-xl mastOrangeShadow bg-transparent"/>
        </div>
      {/* Profile Header */}
      <div className=" md:flex gap-1">
        {/* image  ----------*/}
        <div className="md:w-[30%] ">
            <img
          src={profile.avatar_url}
          alt="avatar"
          className="w-[350px] h-[350px] rounded-xl border-2 border-indigo-500 shadow-lg object-cover object-center"
        />
        </div>
        {/* text and other  --------------*/}
        <div className=" md:w-[70%] p-5 relative">
            <div className=" text-center md:text-left">
                <h2 className="md:text-3xl text-2xl font-bold">{profile.name}</h2>
                <p className="text-neutral-400 md:mt-2">{profile.bio}</p>
            </div>
        {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-5 ">
                <StatCard label="Public Repos" value={profile.public_repos} />
                <StatCard label="Followers" value={profile.followers} />
                <StatCard label="Total Stars" value={stats.stars} />
                <StatCard label="Total Forks" value={stats.forks} />
            </div>
            <div className="bg-gray-50 h-26.25 rounded-md mastShadow">
                
            </div>
        </div>
      </div>

      <div className="bg-gray-400 my-10 h-125 rounded-md">
        
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-gray-50/30 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-md h-full">
      <p className="text-3xl font-bold text-indigo-400">{value}</p>
      <p className="text-sm text-neutral-400 mt-2">{label}</p>
    </div>
  );
}