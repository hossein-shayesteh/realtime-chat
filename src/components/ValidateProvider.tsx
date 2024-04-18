"use client";
import { useEffect } from "react";
import { revalidation, RevalidationProps } from "@/src/lib/action/revalidation";
import { pusherClient } from "@/src/lib/pusher/pusher";
import toPusherKey from "@/src/helpers/toPusherKey";
import { Session } from "next-auth";

const ValidateProvider = ({ session }: { session: Session | null }) => {
  useEffect(() => {
    // Handler for updating incoming friends requests
    const handleUpdateInterface = ({ path }: { path: RevalidationProps[] }) => {
      revalidation(path);
    };

    // Subscribe to the pusher channels for incoming and deleted friends requests
    pusherClient.subscribe(toPusherKey(`user:${session?.user?.id}`));
    pusherClient.bind("update_interface", handleUpdateInterface);

    // Cleanup function to unsubscribe from pusher channels
    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${session?.user?.id}`));
      pusherClient.unbind("update_interface", handleUpdateInterface);
    };
  }, [session?.user?.id]);
  return <></>;
};
export default ValidateProvider;
