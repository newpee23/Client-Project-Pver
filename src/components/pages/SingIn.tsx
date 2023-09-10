import React from 'react'

type Props = {}

const SingIn = ({ }: Props) => {
  return (
    <section>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white w-full m-5 p-5 sml:w-[450px] sml:p-10 text-center rounded-lg shadow-shadowDiv">
          <div className="font-black text-4xl"><h1>Sign In</h1></div>
        </div>
      </div>
    </section>

  )
}

export default SingIn