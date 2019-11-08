import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./index";
import "@testing-library/jest-dom/extend-expect";

const { click, keyDown } = fireEvent;

function getTabPanel(container, button) {
  return container.querySelector(`#${button.getAttribute("aria-controls")}`);
}

beforeEach(() => {
  document.body.innerHTML = "";
  jest.resetModules();
});

describe("rendering basic tabs", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<BasicTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should navigate with the mouse", () => {
    const { container, getByText, asFragment } = render(<BasicTabs />);
    const tab1 = getByText("Tab One");
    const tab2 = getByText("Tab Two");
    const tab3 = getByText("Tab Three");

    click(tab1);

    expect(getTabPanel(container, tab1)).toBeVisible();
    expect(getTabPanel(container, tab2)).not.toBeVisible();
    expect(getTabPanel(container, tab3)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    click(tab2);

    expect(getTabPanel(container, tab2)).toBeVisible();
    expect(getTabPanel(container, tab1)).not.toBeVisible();
    expect(getTabPanel(container, tab3)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    click(tab1);
    click(tab3);

    expect(getTabPanel(container, tab3)).toBeVisible();
    expect(getTabPanel(container, tab1)).not.toBeVisible();
    expect(getTabPanel(container, tab2)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should navigate with the keyboard", () => {
    const { container, getByText, getByRole, asFragment } = render(
      <BasicTabs />
    );
    const tab1 = getByText("Tab One");
    const tab2 = getByText("Tab Two");
    const tab3 = getByText("Tab Three");
    const tabList = getByRole("tablist");

    click(tab1);

    keyDown(tabList, { key: "ArrowRight", code: 39 });
    expect(document.activeElement).toBe(tab2);
    expect(getTabPanel(container, tab2)).toBeVisible();
    expect(getTabPanel(container, tab1)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "ArrowRight", code: 39 });
    expect(document.activeElement).toBe(tab3);
    expect(getTabPanel(container, tab3)).toBeVisible();
    expect(getTabPanel(container, tab2)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "ArrowRight", code: 39 });
    expect(document.activeElement).toBe(tab1);
    expect(getTabPanel(container, tab1)).toBeVisible();
    expect(getTabPanel(container, tab3)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "ArrowRight", code: 39 });
    keyDown(tabList, { key: "ArrowRight", code: 39 });
    expect(document.activeElement).toBe(tab3);
    expect(getTabPanel(container, tab3)).toBeVisible();
    expect(getTabPanel(container, tab1)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "ArrowLeft", code: 37 });
    expect(document.activeElement).toBe(tab2);
    expect(getTabPanel(container, tab2)).toBeVisible();
    expect(getTabPanel(container, tab3)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "ArrowLeft", code: 37 });
    keyDown(tabList, { key: "ArrowLeft", code: 37 });
    expect(document.activeElement).toBe(tab3);
    expect(getTabPanel(container, tab3)).toBeVisible();
    expect(getTabPanel(container, tab2)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "Home", code: 36 });
    expect(document.activeElement).toBe(tab1);
    expect(getTabPanel(container, tab1)).toBeVisible();
    expect(getTabPanel(container, tab3)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();

    keyDown(tabList, { key: "End", code: 35 });
    expect(document.activeElement).toBe(tab3);
    expect(getTabPanel(container, tab3)).toBeVisible();
    expect(getTabPanel(container, tab1)).not.toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});

////////////////////////////////////////////////////////////////////////////////
function BasicTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab id="tab-1">Tab One</Tab>
          <Tab id="tab-2">Tab Two</Tab>
          <Tab id="tab-3">Tab Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <h1>one!</h1>
            <button>yo</button>
          </TabPanel>
          <TabPanel>
            <h1>two!</h1>
          </TabPanel>
          <TabPanel>
            <h1>three!</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
