import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import WishListPage from "../../pages/WishListPage";

type Prop = {
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
  state: boolean;
};

export default function WishListDrawer({ toggleDrawer, state }: Prop) {
  return (
    <div style={{ width: "30vw", margin: "auto" }}>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        sx={{ width: "30vw" }}
      >
        <WishListPage />
      </SwipeableDrawer>
    </div>
  );
}
