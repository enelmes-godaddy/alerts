import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { ALERT_EMPHASES, ALERT_ICONS, DISMISS } from "./AlertSettings";

function Alert(props) {

    const { style, emphasis, header, body, action, lighterBackground, stroke, iconColor, isDismissable
    } = props;

    return (
        <div className={classNames("Alert", style, emphasis, { light: lighterBackground, stroke: stroke })}>
            <div className={classNames("Alert--icon", iconColor && emphasis)}>
                {ALERT_ICONS[emphasis]}
            </div>
            <div className="Alert--content">
                {header && <div className="Alert--header">
                    {style === "new" ? <h3 className={classNames({ "mb-s": body })}>{header}</h3> : <h2>{header}</h2>}
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

Alert.defaultProps = {
    action: "Action",
    body: "Body",
    emphasis: "info",
    header: "Header",
    iconColor: false,
    isDismissable: true,
    lighterBackground: false,
    stroke: false,
    style: ("current" || "new"),
}

Alert.propTypes = {
    action: PropTypes.string,
    body: PropTypes.string,
    emphasis: PropTypes.oneOf(ALERT_EMPHASES),
    header: PropTypes.string,
    iconColor: PropTypes.bool,
    isDismissable: PropTypes.bool,
    lighterBackground: PropTypes.bool,
    stroke: PropTypes.bool,
    style: PropTypes.string
}

export default Alert;