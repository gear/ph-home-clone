interface BaseLayoutProps {
  children: React.ReactElement;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return <div className="w-full min-h-screen">{children}</div>;
};

export default BaseLayout;
