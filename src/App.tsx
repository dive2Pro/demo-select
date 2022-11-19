import {
  Button,
  InputGroup,
  Dialog,
  Classes,
  Divider,
  Overlay,
  Switch,
  Checkbox,
  Menu,
  Text,
  Popover,
  Position,
  MenuItem,
  Icon
} from "@blueprintjs/core";

import type { DateFormatProps } from "@blueprintjs/datetime";
import { DateRangePicker, DateRangeInput } from "@blueprintjs/datetime";
import { store } from "./store";
import { enableLegendStateReact, observer } from "@legendapp/state/react";
import { MomentDateRange, MOMENT_FORMATS } from "./moment";

enableLegendStateReact();

function _App() {
  return (
    <>
      <Dialog
        isOpen={store.ui.isOpen()}
        style={{ paddingBottom: 0, width: "unset" }}
      >
        <div style={{ display: "flex" }}>
          <section style={{ width: 600, padding: 10 }}>
            <div>
              <InputGroup
                placeholder="search..."
                leftIcon="search"
                autoFocus
                fill
                value={store.ui.getSearch()}
                onChange={(e) => store.actions.changeSearch(e.target.value)}
              />
            </div>

            <Popover
              position={Position.BOTTOM}
              modifiers={{
                arrow: {
                  enabled: false
                }
              }}
              content={
                <Menu>
                  <MenuItem text="By creation time - most recent to oldest" />
                  <MenuItem text="By creation time - from oldest to most recent" />
                  <MenuItem text="By modification time - most recent to oldest" />
                  <MenuItem text="By modification time - from oldest to most recent" />
                </Menu>
              }
            >
              <div className="bp3-text-small">
                Sort by:{" "}
                <Button
                  rightIcon={<Icon icon="chevron-down" size={12} />}
                  minimal
                  small
                  className="bp3-code"
                  text={
                    <span className="bp3-text-small">Created Time: game</span>
                  }
                ></Button>
              </div>
            </Popover>
            <Divider />

            <div style={{ flex: 1, maxHeight: 550, overflow: "scroll" }}>
              <ul>
                {new Array(100).fill(0).map((_, index) => {
                  return <li>- {index} -</li>;
                })}
              </ul>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Button intent="success">4</Button>
                <Button intent="primary">Confirm</Button>
              </div>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <sub>(shift click in one block)</sub>
              </div>
            </div>
          </section>
          <section
            style={{
              width: 220,
              backgroundColor: "hsl(204,33%,97%)",
              padding: 10
            }}
          >
            <div>
              <Switch label="Only Page" alignIndicator="left" />
              <Switch label="Only Block" alignIndicator="left" />
              <Switch label="Only Twitter" alignIndicator="left" />
              <Switch label="Only PDF" alignIndicator="left" />
              <Switch label="Only Media" alignIndicator="left" />

              <h4 className="bp3-heading">Quick Search</h4>
              <Button minimal icon="person">
                Created By Me
              </Button>
              <Button minimal icon="calendar">
                Modifyied last week
              </Button>
              <Button minimal icon="search-text">
                Search in current page
              </Button>

              <h4 className="bp3-heading">Custom Search</h4>

              <Popover
                position={Position.BOTTOM}
                content={
                  <DateRangePicker
                    allowSingleDayRange
                    {...MOMENT_FORMATS[0]}
                    className={Classes.ELEVATION_1}
                    onChange={(range) => store.actions.changeRange(range)}
                  />
                }
              >
                <div>
                  <Button minimal icon="calendar">
                    Modifyied last week
                  </Button>
                </div>
              </Popover>
            </div>
          </section>
        </div>
      </Dialog>
      <Button onClick={() => store.actions.openDialog()}>Search</Button>
    </>
  );
}

export default observer(_App);
