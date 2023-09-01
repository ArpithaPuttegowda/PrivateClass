import { useIsMobile } from "./useIsMobile";

export const Payment = () => {
  const isMobile=useIsMobile()
  return (
    <div>{isMobile && <div>Payment Info of Customers</div>}</div>
  )
}
