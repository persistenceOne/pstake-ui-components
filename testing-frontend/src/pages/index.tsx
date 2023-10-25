import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={"p-4 bg-dropDown"}>
      <Link href={"/buttons"}>Button</Link>
    </div>
  );
};

export default Home;
