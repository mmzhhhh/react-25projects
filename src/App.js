
import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import LightDarkMode from "./components/light-dark-mode";
import { menus } from "./components/tree-view/data";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-text";
import GithubProfileFinder from "./components/github-profile-finder/index";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTactToe from "./components/tic-tact-toe/index.jsx";
import FeatureFlagGlobalState from "./components/feature-flag/context/index.jsx";
import FeaturesFlags from "./components/feature-flag/index.jsx";
import UseFetchHookTest from "./components/use-fetch/test.jsx";
import UseOnclickOutsideTest from "./components/use-outside-click/test.jsx";
import UseWindowResizeTest from "./components/use-window-resize-vue/test.jsx";
import ScrollToTopAndBottom
 from "./components/scroll-to-top-and-bottom/index.jsx";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section.jsx";

function App() {
  return (
    <div className="">
      {/* <Accordian /> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"5"} page={"1"} /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutoComplete/> */}
      {/* <TicTactToe/> */}
      {/* <FeatureFlagGlobalState>
        <FeaturesFlags/>
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnclickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom/> */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
