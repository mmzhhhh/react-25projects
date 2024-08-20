import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../light-dark-mode/index.jsx";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import TabTest from "../custom-tabs/tab-test";
import {menus} from "../tree-view/data.js";
export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey){
    return enableFlags[getCurrentKey]
  }
  
  if(loading)return <h1>Loading data ! Please wait</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem)=>checkEnabledFlags(componentItem.key)?componentItem.component:null)}
    </div>
  );
}
