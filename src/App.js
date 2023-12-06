import { useState } from "react";
import { ALERT_EMPHASES } from "./AlertSettings";
import Alert from "./Alert";
import './App.scss';

function App() {
  const defaultEmphasis = "info";
  const defaultHeaderText = "Header";
  const defaultBodyText = "Body";
  const defaultActionLabel = "Action Link";

  const [emphasis, setEmphasis] = useState(defaultEmphasis);
  const [headerText, setHeaderText] = useState(defaultHeaderText);
  const [bodyText, setBodyText] = useState(defaultBodyText);
  const [actionLabel, setActionLabel] = useState(defaultActionLabel);
  const [lighterBackground, setLighterBackground] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [iconColor, setIconColor] = useState(false);
  const [isDismissable, setIsDismissable] = useState(true);
  const [disableReset, setDisableReset] = useState(true);

  function handleOnClick() {
    setEmphasis(defaultEmphasis);
    setHeaderText(defaultHeaderText);
    setBodyText(defaultBodyText);
    setActionLabel(defaultActionLabel);
    setLighterBackground(false);
    setStroke(false);
    setIconColor(false);
    setIsDismissable(true);
    setDisableReset(true);
  }

  return (
    <div className="App">
      <div className="section setup">
        <div className="section--header">
          <h1>Setup</h1>
          <button
            className="reset-button"
            onClick={handleOnClick}
            disabled={disableReset}
          >
            Reset All
          </button>
        </div>
        <div className="section--main">
          <div>
            <div className="setup--block">
              <p className="label">Emphasis</p>
              <form>
                {ALERT_EMPHASES.map(option => (
                  <div>
                    <input
                      type="radio"
                      name="emphasis"
                      id={option}
                      value={option}
                      checked={option === emphasis}
                      onChange={event => {
                        setEmphasis(event.target.value);
                        setDisableReset(false);
                      }}
                    />
                    <label htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="setup--block">
              <p className="label">New Alert Options</p>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-lighter-background"
                  checked={lighterBackground}
                  onChange={event => {
                    setLighterBackground(event.target.checked);
                    setDisableReset(false);
                  }}
                />
                <label htmlFor="new-alert-lighter-background">
                  Lighter background
                </label>
              </form>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-stroke"
                  checked={stroke}
                  onChange={event => {
                    setStroke(event.target.checked);
                    setDisableReset(false);
                  }}
                />
                <label htmlFor="new-alert-stroke">
                  Stroke
                </label>
              </form>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-colored-icon"
                  checked={iconColor}
                  onChange={event => {
                    setIconColor(event.target.checked)
                    setDisableReset(false);
                  }}
                />
                <label htmlFor="new-alert-colored-icon">
                  Colored Icon
                </label>
              </form>
            </div>
          </div>
          <div>
            <div className="setup--block">
              <form>
                <label className="label" htmlFor="header-text">
                  Header Text (Optional)
                </label>
                <input
                  value={headerText}
                  id="header-text"
                  onChange={e => {
                    setHeaderText(e.target.value);
                    setDisableReset(false);
                  }}
                  placeholder="Header"
                />
              </form>
            </div>
            <div className="setup--block">
              <form>
                <label className="label" htmlFor="body-text">
                  Body Text
                </label>
                <textarea
                  value={bodyText}
                  id="body-text"
                  onChange={e => {
                    setBodyText(e.target.value);
                    setDisableReset(false);
                  }}
                  placeholder="Body"
                  rows={5}
                />
              </form>
            </div>
            <div className="setup--block">
              <form>
                <label className="label" htmlFor="action-link-label">
                  Action Link Label (Optional)
                </label>
                <input
                  value={actionLabel}
                  id="action-link-label"
                  onChange={e => {
                    setActionLabel(e.target.value)
                    setDisableReset(false);
                  }}
                  placeholder="Action Link"
                />
              </form>
            </div>
            <div className="setup--block">
              <p className="label">Dismissable</p>
              <form>
                <input
                  type="checkbox"
                  id="make-dismissable"
                  checked={isDismissable}
                  onChange={event => {
                    setIsDismissable(event.target.checked)
                    setDisableReset(false);
                  }}
                />
                <label htmlFor="make-dismissable">
                  Make Dismissable
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="section examples">
        <h1 className="section--header">
          Examples
        </h1>
        <div className="section--main">
          <div className="example">
            <p className="label">Current</p>
            <Alert
              action={actionLabel}
              body={bodyText}
              emphasis={emphasis}
              header={headerText}
              isDismissable={isDismissable}
              style={"current"}
            />
          </div>
          <div className="example">
            <p className="label">New</p>
            <Alert
              action={actionLabel}
              body={bodyText}
              emphasis={emphasis}
              header={headerText}
              iconColor={iconColor}
              isDismissable={isDismissable}
              lighterBackground={lighterBackground}
              stroke={stroke}
              style={"new"}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
