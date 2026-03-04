import { GitHubCalendar } from "react-github-calendar";

function GithubHeatmap() {
  return (
    <div className="md:flex flex-col items-center p-3">
      <GitHubCalendar
        username="sharwanKunwar"
        colorScheme="light"
        blockSize={14.9}
        blockMargin={5}
        fontSize={13}
      />
    </div>
  );
}

export default GithubHeatmap;