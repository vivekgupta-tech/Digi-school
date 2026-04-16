import Lottie from "lottie-react";
import emptyAnimation from "@assets/lottie/EmptyState.json";

const EmptyState = ({ message = "No Data Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-64 h-64">
        <Lottie animationData={emptyAnimation} loop={true} />
      </div>

      <p className="text-gray-500 mt-4 text-sm">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;   
// fhbdjhfdhfd