export default function Disclaimer() {
  return (
    <div className="not-prose mt-14 border-t border-[#E2E8F0] pt-6 space-y-3">
      <p className="text-sm text-[#64748B]">
        <span className="font-semibold text-[#475569]">Disclaimer:</span> This
        content is for general informational purposes only and does not
        constitute professional tax, legal, or financial advice. Tax laws change
        frequently. Always consult a qualified tax professional for advice
        specific to your situation.
      </p>
      <p className="text-sm text-[#64748B]">
        <span className="font-semibold text-[#475569]">Sources:</span> Data
        sourced from official government tax authorities: IRS (US),
        Bundesfinanzministerium (Germany), CRA (Canada), HMRC (UK), Income Tax
        Department of India. Last verified: March 2026.
      </p>
    </div>
  );
}
