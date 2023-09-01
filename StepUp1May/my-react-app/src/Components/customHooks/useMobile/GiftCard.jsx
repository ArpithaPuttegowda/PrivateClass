import "./RealTimeMediaQuery.css";
import { useIsMobile } from "./useIsMobile";

export const RenderData = () => {
  const isMobile=useIsMobile()
  return (
   <div>
    {
      isMobile?<div>GiftCards</div>:<div>Search Items</div>
    }
   </div>
  );
};
