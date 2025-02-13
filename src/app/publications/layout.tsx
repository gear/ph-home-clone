import BaseLayout from "@/components/layout/BaseLayout";
import { PublicationsProvider } from "./context/PublicationsContext";

interface PublicationLayoutProps {
  children: React.ReactElement;
}

export default function PublicationLayout({
  children,
}: PublicationLayoutProps) {
  return (
    <BaseLayout>
      <PublicationsProvider>{children}</PublicationsProvider>
    </BaseLayout>
  );
}
