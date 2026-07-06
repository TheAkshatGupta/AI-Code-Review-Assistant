import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function StatsCard({
  title,
  value,
  description,
}: StatsCardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-base text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="text-3xl font-bold text-blue-600">
          {value}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}