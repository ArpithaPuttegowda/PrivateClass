import {fireEvent, render,screen} from "@testing-library/react"
import Counter from "../Counter"

describe("Counter Comp",()=>{
    it("should render Counter with button",()=>{
        render(<Counter/>)
        expect(screen.getByText("Count:")).toBeInTheDocument()
        expect(screen.getByText("0")).toBeInTheDocument()
        // expect(screen.getByRole("button").innerHTML).toBe("Increment")
        expect(screen.getByText("Increment")).toBeInTheDocument()
    })
    it("should click the button",()=>{
        render(<Counter/>)
      const buttonRef=screen.getByText("Increment")
        fireEvent.click(buttonRef)
        expect(screen.getByText("1")).toBeInTheDocument()
        fireEvent.click(buttonRef)
        expect(screen.getByText("2")).toBeInTheDocument()
    })
})