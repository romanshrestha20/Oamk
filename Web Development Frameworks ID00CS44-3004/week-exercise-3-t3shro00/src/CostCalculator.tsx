import { useState } from "react";

interface CostCalculatorProps {
  priceOfSingleVMPerHour: number;
}
const CostCalculator = ({ priceOfSingleVMPerHour }: CostCalculatorProps) => {
  const [vmNumber, setVmNumber] = useState<number>(1);
  const costPerHour = vmNumber * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerHour * 8760; // 8760 = 365 days * 24 hours

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={(e) => setVmNumber(Number(e.target.value))}
      />
      <p>Cost per hour: {costPerHour.toFixed(2)} </p>
      <p>Cost per day: {costPerDay.toFixed(2)}</p>
      <p>Cost per month: {costPerMonth.toFixed(2)}</p>
      <p>Cost per year: {costPerYear.toFixed(2)}</p>
    </div>
  );
};

export default CostCalculator;
