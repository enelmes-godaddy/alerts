import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { ALERT_EMPHASES, ALERT_ICONS, ALERT_NEW_BG, DISMISS } from "../AlertSettings";

function NewAlert(props) {

    const { action, bg, body, border, borderLeft, emphasis, header, iconColor, isDismissable, style
    } = props;

    return (
        <div className={classNames("Alert--New", style, "bg-"+bg, emphasis, { border: border, "border-left": borderLeft })}>
            <div className={classNames("Alert--icon", iconColor && emphasis)}>
                {ALERT_ICONS[emphasis]}
            </div>
            <div className="Alert--content">
                {header && <div className="Alert--header">
                    <h3 className={classNames({ "mb-s": body })}>{header}</h3>
                </div>}
                {body && <div className="Alert--body">
                    <p>{body}</p>
                </div>}
                {action && <div className="Alert--action">
                    <button className={classNames("button-action", { "mt-m": (body || header) })}>{action}</button>
                </div>}
            </div>
            {isDismissable && <button className="button-dismiss">{DISMISS}</button>}
        </div >
    );
}

NewAlert.defaultProps = {
    action: "Action",
    bg: "default",
    body: "Body",
    border: false,
    borderLeft: false,
    emphasis: "info",
    header: "Header",
    iconColor: false,
    isDismissable: true,
}

NewAlert.propTypes = {
    action: PropTypes.string,
    bg: PropTypes.oneOf(ALERT_NEW_BG),
    body: PropTypes.string,
    border: PropTypes.bool,
    borderLeft: PropTypes.bool,
    emphasis: PropTypes.oneOf(ALERT_EMPHASES),
    header: PropTypes.string,
    iconColor: PropTypes.bool,
    isDismissable: PropTypes.bool,
}

export default NewAlert;