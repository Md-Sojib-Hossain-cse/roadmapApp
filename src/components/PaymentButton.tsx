const PaymentButton = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <button className="bg-white rounded-sm h-9 md:h-10  lg:h-11 w-12 md:w-14 lg:w-16 flex justify-center items-center">
      <img src={imgUrl} alt="payment logo" />
    </button>
  );
};

export default PaymentButton;
