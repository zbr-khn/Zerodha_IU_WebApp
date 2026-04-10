import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openActionWindow: (uid, mode) => {},
  closeActionWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isActionWindowOpen, setIsActionWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedActionMode, setSelectedActionMode] = useState("BUY");

  const handleOpenActionWindow = (uid, mode = "BUY") => {
    setIsActionWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedActionMode(mode);
  };

  const handleCloseActionWindow = () => {
    setIsActionWindowOpen(false);
    setSelectedStockUID("");
    setSelectedActionMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openActionWindow: handleOpenActionWindow,
        closeActionWindow: handleCloseActionWindow,
      }}
    >
      {props.children}
      {isActionWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={selectedActionMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
