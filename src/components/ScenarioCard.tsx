import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Scenario } from "@/lib/markdown";

export default function ScenarioCard({
  scenarios,
}: {
  scenarios: Scenario[];
}) {
  if (scenarios.length === 0) return null;

  return (
    <div className="not-prose mt-12 mb-10 space-y-5">
      <h2 className="font-heading text-[1.625rem] font-semibold tracking-tight text-[#0F172A] pb-2 border-b border-[#E2E8F0]">
        Take-Home Scenarios
      </h2>
      {scenarios.map((scenario, i) => (
        <Card
          key={i}
          className="border-[#E2E8F0] bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader className="pb-2">
            <CardTitle className="font-heading text-lg text-[#0F172A]">
              {scenario.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none text-[#334155]"
              dangerouslySetInnerHTML={{ __html: scenario.contentHtml }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
