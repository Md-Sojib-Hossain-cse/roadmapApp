import type { ReactNode } from "react";

const ContactInfo = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className=" bg-white h-8 w-8 rounded-full flex justify-center items-center">
        {children}
      </div>
      <p className="text-white text-sm max-w-[180px] lg:max-w-[224px]">
        {title}
      </p>
    </div>
  );
};

export default ContactInfo;
