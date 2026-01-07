import PostCard from "../../components/postCard/postCard";
import TitleComponent from "../../components/titleComponent/titleComponent";

export default function PostSection() {
  return (
    <div className="container mx-auto my-12">
      <TitleComponent
        subtitle={"Practice Advice"}
        title={"Featured Posts"}
        text={
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
        }
        subtitleColor={"text-blue-primary"}
      />
      <div className="flex flex-col md:flex-row items-center gap-6">
        <PostCard
          title={"Loudest à la Madison #1 (L'integral)"}
          description={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          viewCount={"10"}
          image={"/assets/blog.png"}
          size={"md"}
        />
        <PostCard
          title={"Loudest à la Madison #1 (L'integral)"}
          description={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          viewCount={"10"}
          image={"/assets/blog.png"}
          size={"md"}
        />
        <PostCard
          title={"Loudest à la Madison #1 (L'integral)"}
          description={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          viewCount={"10"}
          image={"/assets/blog.png"}
          size={"md"}
        />
      </div>
    </div>
  );
}
