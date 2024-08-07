import React from "react";

import ContainedImage from "@/components/shared/ContainedImage";
import GroupAvatars from "./GroupAvatars";

import Link from "next/link";
import MotionDiv from "@/components/shared/MotionDiv";
import { GroupCardContent } from "@/lib/types";
import { ShareButton } from "@/components/shared/SocialMediaShare";
interface GroupCardProps {
  group: GroupCardContent;
  userCount?: number;
  profile: {
    id?: number | null;
    image?: string | null;
  }[];
}

const GroupCard = ({ group, userCount, profile }: GroupCardProps) => {
  const combinedUsers = [...group.admins, ...group.members];
  const userArray = combinedUsers.slice(0, 4).map((user) => {
    return {
      id: user.id,
      image: user.image,
    };
  });

  const count = userCount! - userArray.length;

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="flex h-[330px] break-inside-avoid-column flex-wrap rounded-[16px] bg-white-100 p-5  dark:bg-dark-800"
    >
      <Link href={`/groups/${group.id}`} className="flex w-full flex-col">
        <div>
          <ContainedImage
            src={group?.coverImage!}
            alt="group image"
            height={150}
            className="h-[150px] w-full rounded-[8px] object-contain"
          />
        </div>
        <div className="justify-start">
          <div className="paragraph-1-bold line-clamp-1 text-left capitalize text-dark-800 dark:text-white-100">
            <span className="text-left">{group?.name}</span>
          </div>

          <div className="paragraph-3-regular my-1 line-clamp-4 text-white-400 dark:text-white-300">
            <span>{group?.about}</span>
          </div>
        </div>
      </Link>

      <div className="flex w-full flex-1 flex-row items-center justify-between">
        <MotionDiv
          className="flex items-center gap-x-[-18px]"
          initial="collapsed"
          animate="open"
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
            collapsed: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
        >
          {userArray.map((user) => (
            <MotionDiv
              key={user.id}
              variants={{
                open: { opacity: 1, x: 0 },
                collapsed: { opacity: 0, x: -20 },
              }}
            >
              <GroupAvatars members={[user]} count={0} />
            </MotionDiv>
          ))}
          {combinedUsers.length > 4 && count > 0 && (
            <MotionDiv
              className="paragraph-4-regular flex size-[30px] items-center justify-center rounded-full bg-primary-100 dark:bg-dark-700 dark:text-white-100"
              variants={{
                open: { opacity: 1, x: 5 },
                collapsed: { opacity: 0, x: -20 },
              }}
            >
              +{count}
            </MotionDiv>
          )}
        </MotionDiv>
        <div className="flex size-[30px] items-center justify-center  rounded-full bg-white-200 dark:bg-dark-700">
          <ShareButton params={{ id: String(group.id) }} />
        </div>
      </div>
    </MotionDiv>
  );
};

export default GroupCard;
