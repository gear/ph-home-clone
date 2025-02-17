import BaseLayout from "@/components/layout/BaseLayout";
import { TeamProvider } from "@/context/TeamContext";

interface TeamLayoutProps {
  children: React.ReactElement;
}

export default function TeamLayout({ children }: TeamLayoutProps) {
  return (
    <BaseLayout>
      <TeamProvider>{children}</TeamProvider>
    </BaseLayout>
  );
}
