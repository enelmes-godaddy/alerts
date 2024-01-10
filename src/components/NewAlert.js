import React from "react";
import classNames from "classnames";
import Button from '@ux/button';
import { ALERT_ICONS, DISMISS } from "../AlertSettings";
import '@ux/button/styles';

function NewAlert(props) {

    const { size, bg, body, border, borderLeft, coloredIcon, cta, emphasis, header, isDismissable, lockup } = props;

    return (
        <div style={{ width: `${size}px` }} className={classNames("Alert-New", "bg-" + bg, emphasis, { border: border, "border-left": borderLeft })}>
            <div className={classNames("Alert--content", "txt-"+lockup)}>
                <div className="Alert--icon-and-text-wrapper">
                    <div className={classNames("Alert--icon", coloredIcon && emphasis)}>
                        {ALERT_ICONS[emphasis]}
                    </div>
                    <div className="text-lockup">
                        {header && <div className="Alert--header">
                            <h3 className={classNames({ "mb-s": body })}>{header}</h3>
                        </div>}
                        {body && <div className="Alert--body">
                            <p>{body}</p>
                        </div>}
                    </div>
                </div>
                {cta && <div className="Alert--actions">
                    <Button design="secondary" size="small" text={cta} />
                </div>}
            </div>
            {isDismissable && <button className="button-dismiss">{DISMISS}</button>}
        </div >
    );
}

export default NewAlert;