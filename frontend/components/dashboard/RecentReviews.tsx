import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex items-center justify-between">
          <span>React Portfolio</span>
          <Badge>Completed</Badge>
        </div>

        <div className="flex items-center justify-between">
          <span>Python Script</span>
          <Badge>Completed</Badge>
        </div>

        <div className="flex items-center justify-between">
          <span>Java Assignment</span>
          <Badge>Completed</Badge>
        </div>

      </CardContent>
    </Card>
  );
}