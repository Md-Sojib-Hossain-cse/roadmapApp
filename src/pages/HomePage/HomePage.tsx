import { useEffect } from "react";
import RoadmapItemCart from "../../components/RoadmapItemCart";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/user/uers.Slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const existingUser = localStorage.getItem("user");

    //if user available then setting up user on user state
    if (existingUser) {
      dispatch(setUser(JSON.parse(existingUser)));
    }
  }, [dispatch]);

  return (
    <div className="p-2 md:p-4 w-full max-w-5xl lg:mx-auto">
      <h2 className="text-xl lg:text-2xl text-center font-bold gradient-text border-b border-b-white">
        <span>Roadmap</span>
        <span>App</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <RoadmapItemCart></RoadmapItemCart>
        <RoadmapItemCart></RoadmapItemCart>
        <RoadmapItemCart></RoadmapItemCart>
        <RoadmapItemCart></RoadmapItemCart>
        <RoadmapItemCart></RoadmapItemCart>
      </div>
    </div>
  );
};

export default HomePage;
