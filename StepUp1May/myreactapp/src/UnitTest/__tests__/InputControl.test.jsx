
import {render,screen} from "@testing-library/react"
import { LoginForm } from "../InputControl"

describe("Login form",()=>{
    render(<LoginForm/>)
    it("should display login form with user Info",()=>{
        expect(screen.getByLabelText("Username")).toBeInTheDocument()
        expect(screen.getByLabelText("Password")).toBeInTheDocument()
        expect(screen.getByTestId("submit-form")).toBeInTheDocument()
    })
})