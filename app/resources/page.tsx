import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "District 8 Resources | Cade for Cook",
  description:
    "Community resources for District 8 residents — food, housing, health, immigration, legal aid, jobs, and your elected officials directory.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
