import React, { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
} from "@mantine/core";
import { FaBeer } from "react-icons/fa";
import clsx from "clsx";
import { useAtom } from "jotai";
import { sideActiveLink } from "../context/store";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  listLink: Array<string>;
  title: string;
  initialLink: string | undefined;
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },
}));

const AsideBase = ({ children, listLink, title, initialLink }: Props) => {
  const { classes, cx } = useStyles();
  const [activeLink, setActiveLink] = useState(initialLink);
  const [, setSideActiveLink] = useAtom(sideActiveLink);

  const links = listLink.map((link, i) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      href={`/${title.toLowerCase()}/${
        link.toLowerCase() == "home" ? "" : link.toLowerCase()
      }`}
      onClick={(event) => {
        // event.preventDefault();
        setActiveLink(link);
        setSideActiveLink([String(i), link]);
      }}
      key={link}
    >
      {link}
    </Link>
  ));

  return (
    <div className="flex">
      <Navbar height={750} width={{ sm: 150 }} className="h-screen hidden lg:flex">
        <Navbar.Section grow className={classes.wrapper}>
          <div className={clsx(classes.main, "hidden lg:block")}>
            <Title order={2} className={classes.title}>
              {title}
            </Title>

            {links}
          </div>
        </Navbar.Section>
        <Link href="/" className="p-4 bg-gray-50 text-lg font-bold bg-[#228BE6] text-white hover:(scale-100 text-2xl duration-400)">
          Back Home
        </Link>
      </Navbar>
      <div className="p-10 h-screen w-full overflow-auto">{children}</div>
    </div>
  );
};

export default AsideBase;
