import { RecordsTemplate } from "../templates/RecordsTemplate";
import { VehiclesListTemplate } from "../templates/VehiclesListTemplate";
import { NegotiationsTemplate } from "../templates/NegotiationsTemplate";
import { ManagementTemplate } from "../templates/ManagementTemplate";
import { StaffTemplate } from "../templates/StaffTemplate";
import { TransactionsTemplate } from "../templates/TransactionsTemplate";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaHandcuffs } from "react-icons/fa6";
import { AiOutlineAlert } from "react-icons/ai";
import { AiOutlineSnippets } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";

export const Routes = {
  records: {
    name: "home",
    description: "Home",
    icon: <AiOutlineHome />,
    template: <RecordsTemplate />,
  },
  vehiclesList: {
    name: "search",
    description: "Pesquisar",
    icon: <AiOutlineSearch />,
    template: <VehiclesListTemplate />,
  },
  negotiations: {
    name: "prisons",
    description: "Prisões",
    icon: <FaHandcuffs />,
    template: <NegotiationsTemplate />,
  },
  staff: {
    name: "fines",
    description: "Multas",
    icon: <AiOutlineSnippets />,
    template: <StaffTemplate />,
  },
  transactions: {
    name: "wanted",
    description: "Procurados",
    icon: <AiOutlineAlert />,
    // isOwner: true,
    template: <TransactionsTemplate />,
  },
  management: {
    name: "police report",
    description: "Boletim de ocorrência",
    icon: <AiOutlineSolution />,
    // isOwner: true,
    template: <ManagementTemplate />,
  },
};

export type routesType = typeof Routes;
export type routesKeys = keyof routesType;
export type routeType = routesType[routesKeys];
