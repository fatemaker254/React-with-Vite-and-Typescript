import { ReactNode } from "react"

interface Props{
    //children: string;
    children:ReactNode;
}
//this way we can pass chidren to the component
//if want to pass anuthing more complex than string then we hav to write reactnode in the interface
const Alert = ({children}:Props) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert