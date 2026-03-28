// ScenarioCard — placeholder component
// Will be connected in Phase 4 when scenario data is extracted from markdown

export interface ScenarioData {
  monthlyIncome: string;
  annualIncome: string;
  seTax: string;
  federalTax: string;
  totalTax: string;
  takeHome: string;
  retention: string;
}

export default function ScenarioCard({ data }: { data: ScenarioData }) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="font-semibold">{data.monthlyIncome}/month</h3>
      <p>Annual: {data.annualIncome}</p>
      <p>SE Tax: {data.seTax}</p>
      <p>Federal Tax: {data.federalTax}</p>
      <p>Total Tax: {data.totalTax}</p>
      <p className="font-bold">Take-Home: {data.takeHome} ({data.retention})</p>
    </div>
  );
}
