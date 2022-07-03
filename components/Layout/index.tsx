import { FC, memo, PropsWithChildren } from "react";
import Head from "next/head";
import Gnb from "@/components/Gnb";

interface IProps {
  title: string;
}

const Layout: FC<PropsWithChildren<IProps>> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Gnb />
      {children}
    </div>
  );
};

export default memo(Layout);
