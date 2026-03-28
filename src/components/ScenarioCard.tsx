import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Scenario } from "@/lib/markdown";

export default function ScenarioCard({
  scenarios,
}: {
  scenarios: Scenario[];
}) {
  if (scenarios.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      <h2 className="text-2xl font-bold">
        Take-Home Scenarios: $1k / $5k / $20k per Month
      </h2>
      {scenarios.map((scenario, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{scenario.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: scenario.contentHtml }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
