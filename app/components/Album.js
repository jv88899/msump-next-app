import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";

export default function Album({ album }) {
  const { album_image, title, artist, release_year } = album;

  return (
    <div className="absolute">
      <div className="mt-6 h-[365px] max-w-[287px] w-[80vh] flex flex-col items-center justify-center relative bg-whiteBackground rounded-md">
        <div className="w-[140px] h-[132px] bg-primary rounded-md mb-6"></div>
        <div>
          <h2 className="text-lg w-full text-center font-bold">{title}</h2>
          <h3 className="text-sm w-full text-center mb-2">{artist}</h3>
          <div className="w-full text-xs flex justify-center">
            <span>Genre</span>
            <span className="px-1">|</span>
            <span>{release_year}</span>
            <span className="px-1">|</span>
            <span>Ranking</span>
          </div>
        </div>
        <div className="mt-16 flex w-3/4 justify-between">
          <FaRegThumbsDown className="w-12 h-12" />
          <FaRegThumbsUp className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
