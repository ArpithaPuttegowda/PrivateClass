"use client"
import myStore from "./Redux/store"
import { Provider } from "react-redux"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body><Provider store={myStore}>{children}</Provider></body>
    </html>
  )
}
