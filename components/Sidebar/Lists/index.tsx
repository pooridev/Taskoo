"use client";
import { FC, useState } from "react";
import Link from "next/link";

import styles from "./Lists.module.css";
import { ArrowRight, ThreeDotsIcon } from "../../shared/Icon";
import { ProjectType } from "../../../types/ProjectType";

import { useLists } from "../../../providers/Lists";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Lists: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lists = useLists();

  const listsArr = Object.entries(lists);

  const toggleListsDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.ListsWrapper}>
      <header
        className={classNames(styles.Header, { [styles.ListDropDownOpen]: isOpen })}
        onClick={toggleListsDropdown}
      >
        <h3 className="flex justify-between">
          Your Lists
          <ArrowRight className={classNames(isOpen && styles.RotateArrow)} />
        </h3>
      </header>
      <ul className={classNames(styles.Lists, isOpen && styles.Open)}>
        {listsArr.map(([projectId, list]) => (
          <ProjectListItem list={list} key={projectId} />
        ))}
      </ul>
    </div>
  );
};

const ProjectListItem = ({ list }: { list: ProjectType }) => {
  const pathname = usePathname();

  const isLinkActive = (_pathname: string) => pathname == _pathname;

  return (
    <li key={list.id} className={styles.List}>
      <span className={classNames(styles.Title, { [styles.ActiveLink]: isLinkActive(`/list/${list.id}`) })}>
        <Link href={`/list/${list.id}`} passHref>
          <span className="flex-grow">{list.title}</span>
        </Link>
        <button className={styles.OpenOptionsButton}>
          <ThreeDotsIcon />
        </button>
      </span>
    </li>
  );
};

export default Lists;
