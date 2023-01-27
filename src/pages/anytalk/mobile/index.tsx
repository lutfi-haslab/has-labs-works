import { useAtom } from "jotai";
import { useEffect } from "react";
import { sideActiveLink } from "../../../../components/context/store";
import FloatNav from "../../../../components/layout/FloatNav";

type Props = {};

const index = (props: Props) => {
  const [link] = useAtom(sideActiveLink);

  useEffect(() => {
    console.log(link);
  }, [link]);
  return (
    <FloatNav bgColor={"bg-blue-500"}>
      <div className="flex justify-center">
        <div className="w-md h-screen bg-green-400">
          <div>
            <h1>Mobile</h1>
          </div>
          <button className="w-full bg-blue-300">Test</button>
        </div>
      </div>
    </FloatNav>
  );
};

export default index;
