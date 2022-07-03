import { FC, PropsWithChildren, memo } from "react";
import Head from "next/head";

interface IProps {
  title: string;
}

const Layout: FC<PropsWithChildren<IProps>> = function ({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default memo(Layout);
