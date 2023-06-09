import { NextPage } from "next";
import Head from "next/head";
interface Props {
  title?: string;
  desc?: string;
}
export const APP_NAME = "Review App";
const defaultDesc = "A place from where you will get the authentic review";
const AppHead: NextPage<Props> = ({ title, desc }: Props): JSX.Element => {
  const appTitle = title ? title + " | " + APP_NAME : APP_NAME;
  return (
    <Head>
      <title>{appTitle}</title>
      <meta name={desc || defaultDesc} content="" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/" />
    </Head>
  );
};
export default AppHead;
