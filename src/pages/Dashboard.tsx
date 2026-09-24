import { LayoutDashboard } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function Dashboard() {
  return (
    <PagePlaceholder
      title="Dashboard"
      description="Get an overview of your meetings, tasks, and team activity."
      icon={<LayoutDashboard className="w-8 h-8" />}
    />
  );
}
