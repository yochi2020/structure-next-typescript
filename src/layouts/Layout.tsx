import { Header } from "@/components";
import { NextPage } from "next";
interface Props{
  children:React.ReactNode
}
const Layout: NextPage<Props> = (props) =>{
  const { children } = props;
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};
export default Layout;