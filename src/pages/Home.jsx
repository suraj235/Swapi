import React from "react";
import Characters from "../components/Characters";

export default function Home () {
  return(
  <div className="py-10 container flex">
      <div className='w-1/4'>

      </div>

      <div className='w-3/4'>
        <Characters />
      </div>
  </div>
  )
}