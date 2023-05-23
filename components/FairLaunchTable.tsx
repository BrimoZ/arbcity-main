export default function FairLaunchTable() {
  return (
    <div className="overflow-hidden overflow-x-auto">
      <table className="w-full whitespace-nowrap text-left" cellPadding={8}>
        <thead>
          <tr className="text-light-pink">
            <th>Date</th>
            <th>Sale Type</th>
            <th>Tokens</th>
            <th>Soft Cap</th>
            <th>TGE</th>
            <th>Vesting</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white">
            <td>TBA</td>
            <td>Fair Launch</td>
            <td>420,000,000 DDAT</td>
            <td>40,000 BUSD</td>
            <td>25% Unlocked</td>
            <td>4 Weeks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
