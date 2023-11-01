import {fireEvent, render,screen} from "@testing-library/react"
import { StylesDynamically } from "../StylesDynamically"

describe("StylesDynamically comp",()=>{
    beforeEach(()=>{
        render(<StylesDynamically/>)
    })
    it("should render header text",()=>{
        expect(screen.getAllByText("Counter")[0]).toBeInTheDocument()
        expect(screen.getAllByText("Counter")[1]).toBeInTheDocument()
    })
    it("should show the buttons and input field",()=>{
        expect(screen.getByTestId("inc-btn")).toBeInTheDocument()
        expect(screen.getByTestId("dec-btn")).toBeInTheDocument()
        expect(screen.getByTestId("input")).toBeInTheDocument()
        expect(screen.getByText(0)).toBeInTheDocument()
    })
    it("should do onChange of the input",()=>{
        const inputRef=screen.getByTestId("input")
        fireEvent.change(inputRef,{
            target:{
                value:"10"
            }
        })
        expect(inputRef.value).toBe("10")
        fireEvent.change(inputRef,{
            target:{
                value:"1000"
            }
        })
        expect(inputRef.value).toBe("1000")
    })
    it("should inc and dec the count based on input field data",()=>{
        const decRef=screen.getByTestId("dec-btn")
        const inputRef=screen.getByTestId("input")
        fireEvent.change(inputRef,{
            target:{
                value:"10"
            }
        })
        const incRef=screen.getByText("+")
        fireEvent.click(incRef)
        // expect(screen.getByTestId("count").innerHTML).toBe("10")
        expect(screen.getByText(10)).toBeInTheDocument()
        fireEvent.click(incRef)
        expect(screen.getByText(20)).toBeInTheDocument()
        fireEvent.change(inputRef,{
            target:{
                value:"100"
            }
        })
        fireEvent.click(incRef)
        expect(screen.getByText(120)).toBeInTheDocument()
        fireEvent.click(incRef)
        expect(screen.getByText(220)).toBeInTheDocument()
        fireEvent.click(decRef)
        expect(screen.getByText(120)).toBeInTheDocument()
        fireEvent.click(decRef)
        expect(screen.getByText(20)).toBeInTheDocument()
        fireEvent.change(inputRef,{
            target:{
                value:"10"
            }
        })
        fireEvent.click(incRef)
        expect(screen.getByText(30)).toBeInTheDocument()
    })
    it("should apply class dynamically",()=>{
        const decRef=screen.getByTestId("dec-btn")
            const countRef=screen.getByTestId("count")
            const inputRef=screen.getByTestId("input")
            fireEvent.change(inputRef,{
                target:{
                    value:"100"
                }
            })
            const incRef=screen.getByText("+")
            fireEvent.click(incRef)
            // expect(screen.getByTestId("count").innerHTML).toBe("10")
            expect(screen.getByText(100)).toBeInTheDocument()
            expect(countRef).toHaveClass('cr')
            fireEvent.click(incRef)
            expect(screen.getByText(200)).toBeInTheDocument()
            expect(countRef).toHaveClass('cg')
            fireEvent.change(inputRef,{
                target:{
                    value:"200"
                }
            })
            fireEvent.click(decRef)
            expect(screen.getByText(0)).toBeInTheDocument()
            expect(countRef).toHaveClass('cr')
    })
})