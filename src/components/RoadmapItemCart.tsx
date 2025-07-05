const RoadmapItemCart = () => {
  return (
    <div className="flex gap-3 md:gap-4 p-2 md:p-3 border border-[#fff8f8] rounded-sm">
      <div className="flex gap-3 md:gap-4 w-full md:flex-row justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            src={`https://ik.imagekit.io/sojibhossaincse/`}
            alt="product img"
            className="rounded-sm h-6 w-6"
          />
        </div>
        <div className=" space-y-4  w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-medium text-center">JAVAScript</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItemCart;
