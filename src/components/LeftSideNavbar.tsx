import { useNavigate } from "react-router-dom";

interface LeftSideNavbarProps {
  icons: {
    id: string;
    icon: React.ReactNode;
    label: string;
    path: string;
  }[];
}

export default function LeftSideNavbar({ icons }: LeftSideNavbarProps) {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:block min-h-dvh min-w-[78px] p-2 flex-col items-center border border-l-0 border-t-0 border-b-0 border-[#E0E0E0] shadow-xl transition-all -py-20">
      <div className="flex flex-col fixed py-20">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex relative group justify-center py-4 cursor-pointer items-center"
          >
            <button
              onClick={() => {
                navigate(`${item.path}`);
              }}
              className={`flex py-4 mt-2 text-[#85827C] w-13 h-13 cursor-pointer justify-center items-center ${window.location.pathname === item.path ? "bg-[#FFEECD]" : ""} hover:scale-105 rounded-lg hover:text-[#16120A]`}
            >
              {item.icon}
            </button>

            <span className="absolute opacity-0 group-hover:opacity-100 justify-center items-center left-13 top-4 px-2 py-1 bg-gray-800 text-white text-sm rounded-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
