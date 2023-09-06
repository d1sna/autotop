import PostCard from "../components/post-cards/post-card";
import FilterSection from "../components/post-cards/filter-section";
import PaginationBar from "@/components/pagination";

const tenEmptyArray = new Array(10).fill("test");

function Index() {
  return (
    <div className="flex flex-col justify-start w-full h-full font-test">
      {/* <div className="flex font-bold m-3 p-2 text-2xl">Buy car</div> */}
      <FilterSection />
      {tenEmptyArray.map((v, i) => (
        <PostCard key={i} />
      ))}

      <PaginationBar />
    </div>
  );
}

export default Index;
