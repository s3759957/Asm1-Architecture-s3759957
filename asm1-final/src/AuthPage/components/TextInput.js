import React, { CSSProperties, ChangeEventHandler } from "react";

const TextInputProps = {
  label: String,
  name: String,
  type: String,
  placeholder: String,
  style: CSSProperties,
  onChange: ChangeEventHandler
}

const TextInput = (TextInputProps) => {
  return (
    <div
      style={{
        ...styles.style,
        ...TextInputProps.style,
      }}
    >
      <div style={styles.labelStyle}>{TextInputProps.label}</div>

      <input
        type={TextInputProps.type ? TextInputProps.type : "text"}
        name={TextInputProps.name}
        placeholder={TextInputProps.placeholder}
        style={styles.inputStyle}
        onChange={TextInputProps.onChange}
      />
    </div>
  );
};

const styles = {
  style: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    paddingBottom: "12px",
  },
  labelStyle: {
    position: "absolute",
    top: "8px",
    left: "18px",
    fontSize: "11px",
    color: "rgb(175, 175, 175)",
    fontFamily: "VisbyRoundCF-DemiBold",
    width: "100px",
  },
  inputStyle: {
    backgroundColor: "#3e404b",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    outline: "none",
    border: "none",
    borderRadius: "8px",
    padding: "24px 18px 12px 18px",
    width: "100%", // For the padding 18px + 18px
  },
};

// TextInputProps.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   style: PropTypes.CSSProperties.isRequired
// }

export default TextInput;
