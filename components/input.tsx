const Input = () => {
  return (
    <div className="flex flex-col w-full justify-center gap-10 items-center">
      <div className="flex flex-col gap-2">
      <label className="text-2xl border bg-red-500 rounded-md p-2 font-semibold text-white">Enter Your URL Here</label>
      <p className="text-black text-opacity-70">Support Platform - Youtube | Instagram | Facebook</p>
      </div>
      <input placeholder="example.com" className="border-2 w-[80%] border-red-600 border-opacity-30 p-2 outline-none rounded-md " />
    </div>
  )
}

export default Input
