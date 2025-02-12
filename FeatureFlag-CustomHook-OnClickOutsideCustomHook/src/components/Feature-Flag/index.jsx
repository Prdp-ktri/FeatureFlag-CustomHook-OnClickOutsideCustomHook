import Accordion from "./../../../../../../Accordion-Components/src/components/accordion";
import LightDarkMode from "./../../../../../../TreeView-MenuUI-RecursiveNavigationMenu/TreeView-MenuUI-RecursiveNavigationMenu/src/components/light-dark-mode";
// import RandomColor from "./../../../../../../Random-Color-Generator"
import TicTacToe from "./../../../../../../GithubProfile-SearchAPIAutocomplete-TicTacToe/GithubProfile-SearchAPIAutoComplete-TicTac-Toe/src/components/Github-Profile/tic-tac-toe";
// import TreeView from "./../../../../../../TreeView-MenuUI-RecursiveNavigationMenu/TreeView-MenuUI-RecursiveNavigationMenu/src/components/tree-view";
import { FeatureFlagsContext } from "./context";
import React, { useContext } from "react";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    // {
    //   key: "showRandomColorGenrator",
    //   component: <RandomColor />,
    // },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    // {
    //   key: "showTreeView",
    //   component: <TreeView menus={menus} />,
    // },
  ];

  function checkEnabledFlags(getCurrentKeys) {
    return enabledFlags[getCurrentKeys];
  }

  if (loading) return <h1>Loading Data, please wait!</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
