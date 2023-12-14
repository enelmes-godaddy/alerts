import React, { useEffect, useState } from "react";
import Alert from '@ux/alert';
import Button from '@ux/button';
import { ALERT_EMPHASES, ALERT_NEW_BG } from "./AlertSettings";
import NewAlert from "./components/NewAlert";
import '@ux/alert/styles';
import '@ux/button/styles';
import './App.scss';


function App() {
  const defaultEmphasis = "info";
  const defaultTextHeader = "Header";
  const defaultTextBody = "Body";
  const defaultTextAction = "Action";
  const defaultBg = "default";
  
  const [bg, setBg] = useState(defaultBg);
  const [border, setBorder] = useState(false);
  const [borderLeft, setBorderLeft] = useState(false);
  const [emphasis, setEmphasis] = useState(defaultEmphasis);
  const [iconColor, setIconColor] = useState(false);
  const [isDismissable, setIsDismissable] = useState(true);
  const [textAction, setTextAction] = useState(defaultTextAction);
  const [textBody, setTextBody] = useState(defaultTextBody);
  const [textHeader, setTextHeader] = useState(defaultTextHeader);
  const [changesMade, setChangesMade] = useState(false);
  const [show, setShow] = React.useState(true);

  useEffect(() => {
    setChangesMade(
      bg !== defaultBg ||
      border !== false ||
      borderLeft !== false ||
      emphasis !== defaultEmphasis ||
      iconColor !== false ||
      isDismissable !== true ||
      textAction !== defaultTextAction ||
      textBody !== defaultTextBody ||
      textHeader !== defaultTextHeader
    )}, [bg, border, borderLeft, emphasis, iconColor, isDismissable, textAction, textBody, textHeader]);
  
  function handleReset() {
    setBg(defaultBg);
    setBorder(false);
    setBorderLeft(false);
    setEmphasis(defaultEmphasis);
    setIconColor(false);
    setIsDismissable(true);
    setTextAction(defaultTextAction);
    setTextBody(defaultTextBody);
    setTextHeader(defaultTextHeader);
    setChangesMade(false);
  }

  return (
    <div className="App">
      <div className="section setup">
        <div className="section--header">
          <h1>Setup</h1>
          <button
            className="reset-button"
            onClick={handleReset}
            disabled={!changesMade}
          >
            Reset All
          </button>
        </div>
        <div className="section--main">
          <div className="subsection">
            <h2>Shared</h2>
            <div className="wrapper">
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
                  <p className="label">Dismissable</p>
                  <form>
                    <input
                      type="checkbox"
                      id="make-dismissable"
                      checked={isDismissable}
                      onChange={event => {
                        setIsDismissable(event.target.checked)
                      }}
                    />
                    <label htmlFor="make-dismissable">
                      Dismissable
                    </label>
                  </form>
                </div>
              </div>
              <div>
                <div className="setup--block">
                  <form>
                    <label className="label" htmlFor="header-text">
                      Header Text – Optional
                    </label>
                    <input
                      value={textHeader}
                      id="header-text"
                      onChange={e => {
                        setTextHeader(e.target.value);
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
                      value={textBody}
                      id="body-text"
                      onChange={e => {
                        setTextBody(e.target.value);
                      }}
                      placeholder="Body"
                      rows={5}
                    />
                  </form>
                </div>
                <div className="setup--block">
                  <form>
                    <label className="label" htmlFor="action-link-label">
                      CTA label – Optional
                    </label>
                    <input
                      value={textAction}
                      id="action-link-label"
                      onChange={e => {
                        setTextAction(e.target.value)
                      }}
                      placeholder="Action Link"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <h2>New Alert</h2>
            <div className="setup--block">
              <p className="label">Background</p>
              <form>
                {ALERT_NEW_BG.map(option => (
                  <div>
                    <input
                      type="radio"
                      name="bg"
                      id={option}
                      value={option}
                      checked={option === bg}
                      onChange={event => {
                        setBg(event.target.value);
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
              <p className="label">Border</p>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-border"
                  checked={border}
                  onChange={event => {
                    setBorder(event.target.checked);
                  }}
                />
                <label htmlFor="new-alert-border">All-around border</label>
              </form>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-border-left"
                  checked={borderLeft}
                  onChange={event => {
                    setBorderLeft(event.target.checked);
                  }}
                />
                <label htmlFor="new-alert-border-left">Thick left border</label>
              </form>
            </div>
            <div className="setup--block">
              <p className="label">Icon</p>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-colored-icon"
                  checked={iconColor}
                  onChange={event => {
                    setIconColor(event.target.checked)
                  }}
                />
                <label htmlFor="new-alert-colored-icon">
                  Colored icon
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section examples">
        <h1 className="section--header">Examples</h1>
        <div className="section--main">
          <div className="example">
            <p className="label">Current</p>
            {emphasis === "passive"
              ? <p className="text-passive">Not available from UXCore right now.</p>
              : isDismissable
                ? <Alert
                    title={textHeader}
                    emphasis={emphasis}
                    actions={<Button design="inline" text={textAction} />}
                    onClose={() => setShow()}
                  >
                    {textBody}
                  </Alert>
                : <Alert
                    title={textHeader}
                    emphasis={emphasis}
                    actions={<Button design="inline" text={textAction} />}
                  >
                    {textBody}
                  </Alert>
            }
          </div>
          <div className="example">
            <p className="label">New</p>
            <NewAlert
              action={textAction}
              bg={bg}
              body={textBody}
              border={border}
              borderLeft={borderLeft}
              emphasis={emphasis}
              header={textHeader}
              iconColor={iconColor}
              isDismissable={isDismissable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
