import { useEffect } from "react";
import RoadmapItemCart from "../../components/RoadmapItemCart";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/user/uers.Slice";
import { useGetRoadmapItemsQuery } from "../../redux/api/baseApi";
import type { TRoadmapItems } from "../../interfaces";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const existingUser = localStorage.getItem("user");

    //if user available then setting up user on user state
    if (existingUser) {
      dispatch(setUser(JSON.parse(existingUser)));
    }
  }, [dispatch]);

  const { data, isError, isLoading } = useGetRoadmapItemsQuery(undefined);

  return (
    <div className="p-2 md:p-4 w-full max-w-5xl lg:mx-auto">
      <div className="space-y-2 border-b border-b-white pb-2 md:pb-3 lg:pb-4">
        <h2 className="text-xl lg:text-2xl text-center font-bold gradient-text">
          <span>🚀 Roadmap </span>
          <span>Items</span>
        </h2>
        <p className="text-center w-full md:w-3/4 mx-auto">
          Explore curated learning paths to guide your journey in web
          development, programming, and tech. Start building your future step by
          step.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 md:py-6 lg:py-8">
        {isLoading ? (
          <p>Roadmap's on the way....</p>
        ) : isError ? (
          <p className="text-red-500">Something Went Wrong!</p>
        ) : (
          data?.data?.map((item: TRoadmapItems) => (
            <RoadmapItemCart
              key={item?._id}
              roadmapItem={item}
            ></RoadmapItemCart>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
