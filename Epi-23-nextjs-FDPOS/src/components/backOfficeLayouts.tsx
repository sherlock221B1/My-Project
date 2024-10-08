import { Box } from "@mui/material";
import TopBar from "./topBar";
import SideBar from "./sideBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function BackOfficeLayout({ children }: Props) {
  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box sx={{ padding: "20px", paddingRight: "0px" }}> {children}</Box>
      </Box>
    </Box>
  );
}
