export default function LaunchProgress() {
  return (
    <div className="flex flex-col gap-2 text-white/80">
      <div className="flex flex-row justify-between items-center">
        <p>
          Ends in:{" "}
          <span className="text-light-pink">9 Days: 50 Mins: 14 Secs</span>
        </p>
        <p>
          Raised: <span className="text-light-pink">199 ETH</span>
        </p>
      </div>

      <div className="bg-[#D9D9D9] h-[14px] w-full rounded-full overflow-hidden relative">
        <div className="bg-light-pink top-0 left-0 w-[15%] h-full rounded-full" />
      </div>

      <p className="text-right">
        Current Rate:{" "}
        <span className="text-light-pink">1 BNB = 49.885 APE</span>
      </p>
    </div>
  );
}
