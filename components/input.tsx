const Input = ({ onChange, value }: any) => {
  return (
    <div className="flex flex-col w-full justify-center gap-10 items-center">
      <div className="flex flex-col gap-2 w-[90%]">
        <label className="text-[1.4rem] sm:text-2xl border text-center m-auto bg-[#D80032] rounded-md p-2 font-semibold text-white">
          Enter Your URL Here
        </label>
        <p className="text-black opacity-70 text-[10px] sm:text-xs m-auto">
          Support Platform - Youtube | Instagram | Facebook
        </p>
      </div>
      <input
        onChange={onChange}
        value={value}
        placeholder="example.com"
        className="border-2 w-[80%] border-red-600 border-opacity-30 p-2 outline-none rounded-md "
      />
    </div>
  );
};

export default Input;
