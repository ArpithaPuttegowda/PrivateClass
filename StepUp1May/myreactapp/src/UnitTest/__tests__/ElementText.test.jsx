// ElementComponent.test.js
import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import ElementComponent from '../ElementText';

describe("ElementText",()=>{
    it("should render Element Text",()=>{
       render(<ElementComponent/>)
       expect(screen.getByText("Element Text")).toBeInTheDocument()
       expect(screen.getByText("Hide Text")).toBeInTheDocument()
    })

    it("should not render Element Text when isShow is false",()=>{
        render(<ElementComponent/>)
        const butRef=screen.getByText("Hide Text")
        fireEvent.click(butRef)
        expect(screen.queryByText("Element Text")).not.toBeInTheDocument()
        expect(screen.getByText("Show Text")).toBeInTheDocument()
        fireEvent.click(butRef)
        expect(screen.getByText("Element Text")).toBeInTheDocument()
        expect(screen.getByText("Hide Text")).toBeInTheDocument()
     })
})