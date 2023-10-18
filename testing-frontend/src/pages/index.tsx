import type { NextPage } from "next";
import ExampleAtom from "../components/atoms/Example";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={"p-4"}>
      <Link href={"/button"}>Button</Link>
    </div>
  );
};

export default Home;
