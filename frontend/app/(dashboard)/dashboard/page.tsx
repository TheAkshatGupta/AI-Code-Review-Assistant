import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Analyze your source code using AI and Static Analysis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Total Reviews"
          value="0"
          description="Reviews completed"
        />

        <StatsCard
          title="Files Reviewed"
          value="0"
          description="Source files analyzed"
        />

        <StatsCard
          title="AI Score"
          value="--"
          description="Average code quality"
        />

        <StatsCard
          title="Issues Found"
          value="0"
          description="Detected by AI"
        />

      </div>
    </div>
  );
}