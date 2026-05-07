import { Menu, X } from "lucide-react";

type MobileMenuToggleProps = {
  controlsId: string;
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuToggle = ({
  controlsId,
  isOpen,
  onClick,
}: MobileMenuToggleProps) => {
  const Icon = isOpen ? X : Menu;

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-controls={controlsId}
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative text-sm box-border caret-transparent flex flex-col leading-[22.4px] min-h-[auto] min-w-px outline-[3px] overflow-hidden bg-transparent border-0 cursor-pointer p-0 md:text-base md:hidden md:leading-[25.6px] md:min-h-0"
    >
      <div className="relative text-sm items-center box-border caret-transparent flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden p-2.5 md:text-base md:leading-[25.6px] md:min-h-0 md:min-w-0">
        <Icon
          aria-hidden="true"
          className="text-blue-900 h-9 w-9"
          strokeWidth={3}
        />
      </div>
    </button>
  );
};
