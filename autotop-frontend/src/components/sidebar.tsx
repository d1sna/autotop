import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { CloseOutlined } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";

interface SidebarProps {
  setSidebarOpen: Function;
}

export function Sidebar({ setSidebarOpen }: SidebarProps) {
  const SideBarItems = [
    {
      itemName: "Developers",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      onClickFunc: () => {
        Router.push("/developers");
      },
    },
    {
      itemName: "Apartments",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      onClickFunc: () => {
        Router.push("/apartments");
      },
    },
    {
      itemName: "Inbox",
      icon: <InboxIcon className="h-5 w-5" />,
      onClickFunc: () => {
        Router.push("/inbox");
      },
    },
    {
      itemName: "Profile",
      icon: <UserCircleIcon className="h-5 w-5" />,
      onClickFunc: () => {
        Router.push("/profile");
      },
    },
    {
      itemName: "Settings",
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      onClickFunc: () => {
        Router.push("/settings");
      },
    },
    {
      itemName: "Logout",
      icon: <PowerIcon className="h-5 w-5" />,
      onClickFunc: () => {
        signOut({ redirect: false });
        toast.info("See you soon... :)");
        setSidebarOpen(false);
        setTimeout(() => Router.push("/sign-in"), 500);
      },
    },
  ];

  return (
    <Card className="fixed top-0 z-50 w-full max-h-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 uppercase">
      <div className="mb-2 p-4 flex items-center w-full justify-between">
        <Typography variant="h5" color="blue-gray">
          Menu
        </Typography>
        <button
          className="hover:background-grey-300"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseOutlined />
        </button>
      </div>
      <List className="flex">
        {SideBarItems.map(({ itemName, icon, onClickFunc }, i) => (
          <ListItem key={i} onClick={onClickFunc}>
            <ListItemPrefix>{icon}</ListItemPrefix>
            {itemName}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
