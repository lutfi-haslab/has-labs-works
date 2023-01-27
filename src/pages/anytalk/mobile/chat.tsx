import React from "react";
import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { sideActiveLink } from "../../../../components/context/store";
import AsideBase from "../../../../components/layout/AsideBase";
import { anyTalkLink } from "../../../utils/links";
import FloatNav from "../../../../components/layout/FloatNav";

type Props = {};

const index = (props: Props) => {
  const [link] = useAtom(sideActiveLink);

  useEffect(() => {
    console.log(link);
  }, [link]);
  return (
    <FloatNav bgColor={"bg-blue-500"}>
      <h1>Chat</h1>
    </FloatNav>
  );
};

export default index;
