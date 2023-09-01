import "./RealTimeMediaQuery.css";
import { useIsMobile } from "./useIsMobile";

export const Campaign = () => {
 const isMobile=useIsMobile()
  return (
    <div className={isMobile ? "mobile" : "desktop"}>
      {isMobile ? (
        <h1 style={{ color: "red" }}>Campaigns</h1>
      ) : (
        <h1 style={{ color: "blue" }}>Campaigns</h1>
      )}
    </div>
  );
};
