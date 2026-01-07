import { AlarmClock, ChartLine, ChevronRight } from "lucide-react";

export default function PostCard({
  title,
  description,
  date,
  viewCount,
  image,
}) {
  const tags = ["Google", "Trending", "New"];

  return (
    <div className={`relative w-full overflow-hidden shadow-lg  `}>
      <img src={image} alt="blog" className="w-full" />
      <div className="absolute top-2 left-2 bg-red-accent px-4 py-1 rounded-lg text-sm font-bold tracking-wide text-white">
        <h6>New</h6>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center justify-start gap-4">
          {tags.map((tag) => {
            <p>{tag}</p>;
          })}
        </div>

        <h4 className="text-deep-navy">{title}</h4>
        <p className="text-gray-medium bold">{description}</p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlarmClock color="#23A6F0" />
            <p className="text-gray-medium">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <ChartLine color="#23856D" />
            <p className="text-gray-medium">{viewCount} comments</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h6 className="text-gray-medium bold">Learn More</h6>
          <ChevronRight color="#23A6F0" size={32} />
        </div>
      </div>
    </div>
  );
}
