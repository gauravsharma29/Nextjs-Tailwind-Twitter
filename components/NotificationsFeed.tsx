import { BsTwitter } from "react-icons/bs";

import useNotifications from "../hooks/useNotifications";
import useCurrentUser from "../hooks/useCurrentUser";
import { useEffect } from "react";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    // we have to call this to remove dot icon fron the notification as we alredy marked this to zero when land to this page as per API
    // This Nitification triggers on Like or Someone Comment and follow
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return <div className="text-neutral-600 text-center p-6 text-xl">No notifications</div>;
  }

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div key={notification.id} className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800">
          <BsTwitter color="white" size={32} />
          <p className="text-white">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsFeed;
