import InputBox from "./FeedComponents/InputBox";
import Stories from "./FeedComponents/Stories";
import Posts from "./Posts";


export default function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg">
        {/* Stories */}
        <Stories />
        <InputBox />
        <Posts posts={posts}/>
      </div>
    </div>
  );
}
