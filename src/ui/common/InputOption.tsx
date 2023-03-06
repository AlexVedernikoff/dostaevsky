import React, { useState } from "react";
import { components } from "react-select";

export const InputOption: any = ({ getStyles, Icon, isDisabled, isFocused, isSelected, children, innerProps, ...rest }): any => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#7B59CE";

    const style = {
        alignItems: "center",
        backgroundColor: bg,
        color: "inherit",
        display: "flex",
        gap: "10px",
        outline: "none"
    };

    const props = {
        ...innerProps,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        style
    };

    return (
        <components.Option {...rest} {...props} isDisabled={isDisabled} isFocused={isFocused} isSelected={isSelected} getStyles={getStyles} innerProps={props}>
            {props.id[props.id.length - 1] !== "0" ? (
                <>
                    <label className="label rowCheckbox">
                        <input id="checkbox-id" type="checkbox" checked={isSelected} onChange={() => { }} />
                        <label className="label labelCheckbox" htmlFor="checkbox-id"></label>
                    </label>
                    {children}
                </>
            ) : (
                <div style={{ color: "#7B59CE" }}>{children}</div>
            )}
        </components.Option>
    );
};
