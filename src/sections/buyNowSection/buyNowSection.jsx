import TitleComponent from "../../components/titleComponent/titleComponent";

export default function BuyNowSection() {
  return (
    <div className="container mx-auto flex items-center">
      <img src="/assets/buyNow.png" alt="" />
      <div>
        <TitleComponent
          subtitle={"SUMMER 2020"}
          title={"Part of the Neural Universe"}
          text={
            "We know how large objects will act, but things on a small scale."
          }
          align={"left"}
          gap="gap-12"
        />
        <div className="flex items-center gap-4">
          <button className="w-55 rounded-md bg-green-success! border-2 border-green-success px-10 py-4 text-lg font-bold text-white md:w-auto">
            BUY NOW
          </button>
          <button className="w-55 rounded-md bg-white! border-2 border-green-success px-10 py-4 text-lg font-bold text-green-success md:w-auto">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
