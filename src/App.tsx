import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store/store";
import { theme } from "./styles/theme";
import Background from "./styles/Blocks/Background";
import AppWrapper from "./styles/Blocks/AppWrapper";
import Loader from "./styles/Blocks/Loader";
import Header from "./styles/Blocks/Header";
import Logo from "./styles/Blocks/Logo";
import GhText from "./styles/Blocks/GhText";
import LogoText from "./styles/Blocks/LogoText";
import GhCat from "./styles/Blocks/GhCat";
import Results from "./styles/Blocks/Results";

import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FIlterBar";
import { Cards } from "./components/Cards";
import { LoadMore } from "./components/LoadMore";
import { Popup } from "./components/Popup";

import GHTextFIle from "./assets/GitHub_Logo_White.png";
import GHCatFile from "./assets/github-mark.svg";


export const App = () => {

  const ui = useSelector((state: RootState) => state.ui);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*"
          element={
            <Background>
              <AppWrapper>
                <Popup />
                <Header currentId={ui.currentId}>
                  <Logo>
                    <GhText src={GHTextFIle} />
                    <LogoText>Search</LogoText>
                    <GhCat src={GHCatFile} />
                  </Logo>
                  <SearchBar />
                  <Loader load={ui.loading} />
                </Header>
                <Results>
                  <FilterBar />
                  <Cards />
                  <LoadMore />
                </Results>
              </AppWrapper>
            </Background>
          }
        />
      </Routes>
    </ThemeProvider >
  );
};
