import React, { useEffect } from "react";
import { useAtom } from "jotai";
import AsideBase from "../../components/layout/AsideBase";
import { sideActiveLink } from "../../components/context/store";
import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

type Props = {};

const index = (props: Props) => {
  const [link] = useAtom(sideActiveLink);

  const links = ["Security", "Settings", "Dashboard", "Releases", "Account"];

  useEffect(() => {
    console.log(link);
  }, [link]);
  return (
    <AsideBase listLink={links} title={"Home"} initialLink={"Security"}>
      {Number(link[0]) == 0 ? (
        <h1>Security</h1>
      ) : Number(link[0]) == 1 ? (
        <h1>Settings</h1>
      ) : Number(link[0]) == 2 ? (
        <h1>Dashboard</h1>
      ) : (
        <Button
          className="hover:(bg-red-700) bg-red-500"
          onClick={() =>
            showNotification({
              title: "Default notification",
              message: "Hey there, your code is awesome! 🤥",
            })
          }
        >
          Halo
        </Button>
      )}
    </AsideBase>
  );
};

export default index;
