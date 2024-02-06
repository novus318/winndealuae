import React from 'react';
import { Helmet } from 'react-helmet';
interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}) => {


  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
