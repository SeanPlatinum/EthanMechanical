import { ChatLauncher } from "@/components/FloatingWidget/ChatLauncher";
import { ChatIframe } from "@/components/FloatingWidget/ChatIframe";

export const FloatingWidget = () => {
  return (
    <div
      title="Accessibility Menu"
      className="fixed text-black text-base caret-transparent leading-[normal] outline-[3px] z-[2147483647] font-times_new_roman"
    >
      <ChatLauncher />
      <ChatIframe />
    </div>
  );
};
