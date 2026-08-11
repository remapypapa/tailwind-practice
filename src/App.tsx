import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Flex1 from "./pages/flex/Flex1";
import Flex10 from "./pages/flex/Flex10";
import Flex2 from "./pages/flex/Flex2";
import Flex3 from "./pages/flex/Flex3";
import Flex4 from "./pages/flex/Flex4";
import Flex5 from "./pages/flex/Flex5";
import Flex6 from "./pages/flex/Flex6";
import Flex7 from "./pages/flex/Flex7";
import Flex8 from "./pages/flex/Flex8";
import Flex9 from "./pages/flex/Flex9";

import Grid1 from "./pages/grid/Grid1";
import Grid10 from "./pages/grid/Grid10";
import Grid11 from "./pages/grid/Grid11";
import Grid12 from "./pages/grid/Grid12";
import Grid13 from "./pages/grid/Grid13";
import Grid14 from "./pages/grid/Grid14";
import Grid15 from "./pages/grid/Grid15";
import Grid16 from "./pages/grid/Grid16";
import Grid17 from "./pages/grid/Grid17";

import Grid2 from "./pages/grid/Grid2";
import Grid3 from "./pages/grid/Grid3";
import Grid4 from "./pages/grid/Grid4";
import Grid5 from "./pages/grid/Grid5";
import Grid6 from "./pages/grid/Grid6";
import Grid7 from "./pages/grid/Grid7";
import Grid8 from "./pages/grid/Grid8";
import Grid9 from "./pages/grid/Grid9";

import Spacing1 from "./pages/spacing/Spacing1";
import Spacing2 from "./pages/spacing/Spacing2";

import Size1 from "./pages/size/Size1";
import Size2 from "./pages/size/Size2";

import Typography1 from "./pages/typography/Typography1";
import Typography2 from "./pages/typography/Typography2";
import Typography3 from "./pages/typography/Typography3";
import Typography4 from "./pages/typography/Typography4";
import Typography5 from "./pages/typography/Typography5";
import Typography6 from "./pages/typography/Typography6";
import Typography7 from "./pages/typography/Typography7";

import Box1 from "./pages/box/Box1";
import Box2 from "./pages/box/Box2";
import Box3 from "./pages/box/Box3";
import Box4 from "./pages/box/Box4";
import Box5 from "./pages/box/Box5";

import State1 from "./pages/state/State1";
import State2 from "./pages/state/State2";

import TransitionsAnimations1 from "./pages/transitionsAnimations/TransitionsAnimations1";
import TransitionsAnimations2 from "./pages/transitionsAnimations/TransitionsAnimations2";
import TransitionsAnimations3 from "./pages/transitionsAnimations/TransitionsAnimations3";
import TransitionsAnimations4 from "./pages/transitionsAnimations/TransitionsAnimations4";

import Transforms1 from "./pages/transforms/Transforms1";
import Transforms2 from "./pages/transforms/Transforms2";
import Transforms3 from "./pages/transforms/Transforms3";

import ResponsiveDesign1 from "./pages/responsiveDesign/ResponsiveDesign1";
import ResponsiveDesign2 from "./pages/responsiveDesign/ResponsiveDesign2";

import Etc1 from "./pages/etc/Etc1";
import Etc10 from "./pages/etc/Etc10";
import Etc2 from "./pages/etc/Etc2";
import Etc3 from "./pages/etc/Etc3";
import Etc4 from "./pages/etc/Etc4";
import Etc5 from "./pages/etc/Etc5";
import Etc6 from "./pages/etc/Etc6";
import Etc7 from "./pages/etc/Etc7";
import Etc8 from "./pages/etc/Etc8";
import Etc9 from "./pages/etc/Etc9";

import AccordionPage from "./pages/ui/AccordionPage";
import ButtonPage from "./pages/ui/ButtonPage";
import CheckboxPage from "./pages/ui/CheckboxPage";
import DropdownMenuPage from "./pages/ui/DropdownMenuPage";
import InputPage from "./pages/ui/InputPage";
import RadioPage from "./pages/ui/RadioPage";
import SelectPage from "./pages/ui/SelectPage";
import SwitchPage from "./pages/ui/SwitchPage";
import TabsPage from "./pages/ui/TabsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex/1" element={<Flex1 />} />
        <Route path="/flex/2" element={<Flex2 />} />
        <Route path="/flex/3" element={<Flex3 />} />
        <Route path="/flex/4" element={<Flex4 />} />
        <Route path="/flex/5" element={<Flex5 />} />
        <Route path="/flex/6" element={<Flex6 />} />
        <Route path="/flex/7" element={<Flex7 />} />
        <Route path="/flex/8" element={<Flex8 />} />
        <Route path="/flex/9" element={<Flex9 />} />
        <Route path="/flex/10" element={<Flex10 />} />

        <Route path="/Grid/1" element={<Grid1 />} />
        <Route path="/Grid/2" element={<Grid2 />} />
        <Route path="/Grid/3" element={<Grid3 />} />
        <Route path="/Grid/4" element={<Grid4 />} />
        <Route path="/Grid/5" element={<Grid5 />} />
        <Route path="/Grid/6" element={<Grid6 />} />
        <Route path="/Grid/7" element={<Grid7 />} />
        <Route path="/Grid/8" element={<Grid8 />} />
        <Route path="/Grid/9" element={<Grid9 />} />
        <Route path="/Grid/10" element={<Grid10 />} />
        <Route path="/Grid/11" element={<Grid11 />} />
        <Route path="/Grid/12" element={<Grid12 />} />
        <Route path="/Grid/13" element={<Grid13 />} />
        <Route path="/Grid/14" element={<Grid14 />} />
        <Route path="/Grid/15" element={<Grid15 />} />
        <Route path="/Grid/16" element={<Grid16 />} />
        <Route path="/Grid/17" element={<Grid17 />} />

        <Route path="/Spacing/1" element={<Spacing1 />} />
        <Route path="/Spacing/2" element={<Spacing2 />} />
        <Route path="/Size/1" element={<Size1 />} />
        <Route path="/Size/2" element={<Size2 />} />

        <Route path="/Typography/1" element={<Typography1 />} />
        <Route path="/Typography/2" element={<Typography2 />} />
        <Route path="/Typography/3" element={<Typography3 />} />
        <Route path="/Typography/4" element={<Typography4 />} />
        <Route path="/Typography/5" element={<Typography5 />} />
        <Route path="/Typography/6" element={<Typography6 />} />
        <Route path="/Typography/7" element={<Typography7 />} />

        <Route path="/Box/1" element={<Box1 />} />
        <Route path="/Box/2" element={<Box2 />} />
        <Route path="/Box/3" element={<Box3 />} />
        <Route path="/Box/4" element={<Box4 />} />
        <Route path="/Box/5" element={<Box5 />} />

        <Route path="/State/1" element={<State1 />} />
        <Route path="/State/2" element={<State2 />} />

        <Route
          path="/TransitionsAnimations/1"
          element={<TransitionsAnimations1 />}
        />

        <Route
          path="/TransitionsAnimations/2"
          element={<TransitionsAnimations2 />}
        />

        <Route
          path="/TransitionsAnimations/3"
          element={<TransitionsAnimations3 />}
        />

        <Route
          path="/TransitionsAnimations/4"
          element={<TransitionsAnimations4 />}
        />

        <Route path="/Transforms/1" element={<Transforms1 />} />
        <Route path="/Transforms/2" element={<Transforms2 />} />
        <Route path="/Transforms/3" element={<Transforms3 />} />

        <Route path="/ResponsiveDesign/1" element={<ResponsiveDesign1 />} />
        <Route path="/ResponsiveDesign/2" element={<ResponsiveDesign2 />} />

        <Route path="/Etc/1" element={<Etc1 />} />
        <Route path="/Etc/2" element={<Etc2 />} />
        <Route path="/Etc/3" element={<Etc3 />} />
        <Route path="/Etc/4" element={<Etc4 />} />
        <Route path="/Etc/5" element={<Etc5 />} />
        <Route path="/Etc/6" element={<Etc6 />} />
        <Route path="/Etc/7" element={<Etc7 />} />
        <Route path="/Etc/8" element={<Etc8 />} />
        <Route path="/Etc/9" element={<Etc9 />} />
        <Route path="/Etc/10" element={<Etc10 />} />

        <Route path="/ui/Button" element={<ButtonPage />} />
        <Route path="/ui/Input" element={<InputPage />} />
        <Route path="/ui/Select" element={<SelectPage />} />
        <Route path="/ui/Checkbox" element={<CheckboxPage />} />
        <Route path="/ui/Radio" element={<RadioPage />} />
        <Route path="/ui/Switch" element={<SwitchPage />} />
        <Route path="/ui/Accordion" element={<AccordionPage />} />
        <Route path="/ui/Tabs" element={<TabsPage />} />
        <Route path="/ui/DropdownMenu" element={<DropdownMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
