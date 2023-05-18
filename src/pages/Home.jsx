import React from "react";
import Characters from "../components/Characters";

export default function Home () {
  return(
  <div className="py-10 container">
      <div className='md:w-3/4 w-11/12 mx-auto'>
        <Characters />
      </div>
  </div>
  )
}