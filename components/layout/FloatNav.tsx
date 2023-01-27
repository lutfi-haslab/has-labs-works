import { clsx } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiComputerDesktop, HiDevicePhoneMobile } from "react-icons/hi2";

type Props = {
  children: React.ReactNode;
  bgColor: string;
};

const FloatNav = ({ children, bgColor }: Props) => {
  const router = useRouter();
  const path = router.pathname;
  const query = router.query;

  console.log(path == `/anytalk/${query.id}` ? true : false);
  console.log(path);
  return (
    <div className={clsx("relative h-screen", bgColor)}>
      <div className="z-[10000] w-screen bg-gray-50 dark:bg-slate-900">
        <nav className="top-5 fixed right-5 z-20 flex min-h-[auto] min-w-[64px] shrink-0 grow-0 -translate-y-2/4 flex-col justify-around gap-4 rounded-lg border border-t border-gray-200 bg-white/20 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50">
          <h1 className="text-center font-bold text-gray-700/50">Apps</h1>
          <Link
            href="/anytalk"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              AnyTalk{" "}
              <span>
                <HiComputerDesktop />
              </span>
            </h1>
          </Link>
          <Link
            href="/anytalk/mobile"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk/mobile" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              AnyTalk{" "}
              <span>
                <HiDevicePhoneMobile />
              </span>
            </h1>
          </Link>
          <Link
            href="/anytalk/mobile"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk/[id]" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              Dynamic
              <span>
                <HiDevicePhoneMobile />
              </span>
            </h1>
          </Link>
          <Link
            href="/anytalk/mobile"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk/[id]" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              HasData
              <span>
              <HiComputerDesktop />
              </span>
            </h1>
          </Link>
          <Link
            href="/anytalk/mobile"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk/[id]" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              MyDay
              <span>
              <HiComputerDesktop />
              </span>
            </h1>
          </Link>
          <Link
            href="/anytalk/mobile"
            className={`flex min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md  p-1.5 text-gray-700/40 hover:(bg-gray-100 text-gray-700) ${
              path == "/anytalk/[id]" ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="flex justify-center items-center">
              Web3
              <span>
              <HiComputerDesktop />
              </span>
            </h1>
          </Link>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FloatNav;
