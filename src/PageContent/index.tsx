import AppRoutes from "../AppRoutes";

interface PageContentProps {}

const PageContent: React.FC<PageContentProps> = ({}) => {
  return (
    <div className="PageContent">
      <AppRoutes />
    </div>
  );
};

export default PageContent;
