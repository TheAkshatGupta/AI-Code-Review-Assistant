import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCode, Upload } from "lucide-react";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">

        <Button className="justify-start gap-2">
          <FileCode size={18} />
          Paste Code
        </Button>

        <Button variant="outline" className="justify-start gap-2">
          <Upload size={18} />
          Upload File
        </Button>

      </CardContent>
    </Card>
  );
}