import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { CardsType } from "../types";
import { BASE_URL } from "../api/api";
import { theme } from "../styles/theme";
import { apiResponse } from "../__mocks__/apiResponse";
import { SearchBar } from "../components/SearchBar";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test("Set some value in field", () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SearchBar />
            </ThemeProvider>
        </Provider>
    );

    const testString = 'testString';

    const inputElement: HTMLInputElement = screen.getByPlaceholderText("Search user");

    fireEvent.change(inputElement, { target: { value: testString } });

    expect(inputElement.value).toBe(testString);
});

test("Set some value from field to hook", () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SearchBar />
            </ThemeProvider>
        </Provider>
    );

    const testString = 'testString';

    const inputElement: HTMLInputElement = screen.getByPlaceholderText("Search user");

    fireEvent.change(inputElement, { target: { value: testString } });

    const state = store.getState();
    const valueInStore = state.ui.query;

    expect(inputElement.value).toBe(valueInStore);
});



test("Return search results form API correctly", async () => {

    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet(`${BASE_URL}?q=test&sort=repositories&order=desc&per_page=6&page=1`).reply(200, apiResponse);

    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SearchBar />
            </ThemeProvider>
        </Provider>
    );

    await waitFor(() => {
        const respType: CardsType[] = apiResponse.items;
        return respType;
    });
});
