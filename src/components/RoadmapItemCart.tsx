import { Link } from "react-router";
import type { TRoadmapItems } from "../interfaces";

const RoadmapItemCart = ({ roadmapItem }: { roadmapItem: TRoadmapItems }) => {
  const { title, image, _id } = roadmapItem;
  return (
    <Link
      to={`/roadmap/${_id}`}
      className="flex gap-3 md:gap-4 p-2 md:p-3 border border-[#fff8f8] bg-white rounded-sm cursor-pointer transition duration-200 active:scale-95 ease-in-out shadow-sm hover:border hover:border-gray-300"
    >
      <div className="flex gap-3 md:gap-4 w-full md:flex-row justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="product img"
            className="rounded-sm h-6 w-6 bg-cover"
          />
        </div>
        <div className=" space-y-4  w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-medium text-center">{title}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoadmapItemCart;
