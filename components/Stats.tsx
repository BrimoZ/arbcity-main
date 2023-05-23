export default function Stats() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-12 mx-auto mt-12">
      <div className="text-center">
        <h3 className="text-blue text-3xl md:text-4xl tracking-wider text-shadow">
          $1,156,434,832
        </h3>
        <span className="tracking-wider text-white/75">
          Total Deposited Value at DDAT
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center sm:gap-4">
          <h3 className="text-blue text-3xl sm:text-2xl tracking-wider text-shadow">
            $295,204,576
          </h3>
          <div className="flex items-center sm:flex-col sm:items-start gap-1">
            <p className="tracking-wider text-xs text-white/75">$DDAT&nbsp;</p>
            <p className="tracking-wider text-xs text-white/75 leading-none">
              Market Cap
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:gap-4">
          <h3 className="text-blue text-3xl sm:text-2xl tracking-wider text-shadow">
            &nbsp;&nbsp;$14,306,972
          </h3>
          <div className="flex items-center sm:flex-col sm:items-start gap-1">
            <p className="tracking-wider text-xs text-white/75 leading-none">
              Monthly Profits to&nbsp;
            </p>
            <p className="tracking-wider text-xs text-white/75 leading-none">
              $DDAT lovers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
