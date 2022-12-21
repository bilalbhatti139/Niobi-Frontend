export const chatsWrapperStyle = (props, theme) => {
  const borderStyle =
    props._parent === ""
      ? {
          border: `1px solid ${theme.borderColor.primary}`,
        }
      : {};

  return {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
    ...borderStyle,
    "*": {
      boxSizing: "border-box",
      "::-webkit-scrollbar": {
        width: "8px",
        height: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "#ffffff00",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#ccc",
        "&:hover": {
          background: "#aaa",
        },
      },
    },
  };
};

export const chatsHeaderStyle = (theme) => {
  return {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.borderColor.primary}`,
    height: "69px",
  };
};

export const chatsHeaderCloseStyle = (img, theme) => {
  const mq = [...theme.breakPoints];

  return {
    cursor: "pointer",
    display: "none",
    mask: `url(${img}) no-repeat left center`,
    backgroundColor: `${theme.primaryColor}`,
    height: "24px",
    width: "33%",
    [`@media ${mq[0]}`]: {
      display: "block!important",
    },
  };
};

export const chatsHeaderTitleStyle = (props) => {
  const alignment =
    props.hasOwnProperty("enableCloseMenu") && props.enableCloseMenu.length > 0
      ? {
          width: "33%",
          textAlign: "center",
        }
      : {};

  return {
    margin: "0",
    display: "inline-block",
    width: "100%",
    textAlign: "left",
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26px",
    ...alignment,
    "&[dir=rtl]": {
      textAlign: "right",
    },
  };
};
export const chatAddStyle = (img, theme) => {
  return {
    height: "24px",
    cursor: "pointer",
    i: {
      display: "inline-block",
      width: "24px",
      height: "24px",
      mask: `url(${img}) center center no-repeat`,
      backgroundColor: `${theme.primaryColor}`,
    },
  };
};
export const chatSearchStyle = () => {
  return {
    margin: "16px",
    position: "relative",
    borderRadius: "8px",
    boxShadow: "rgba(20, 20, 20, 0.04) 0 0 0 1px inset",
    backgroundColor: "rgba(20, 20, 20, 0.04)",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};

export const chatSearchButtonStyle = (img, context) => {
  return {
    width: "30px",
    height: "100%",
    padding: "8px 0 8px 8px",
    cursor: "default",
    mask: `url(${img}) 10px center no-repeat`,
    backgroundColor: `${context.theme.secondaryTextColor}!important`,
  };
};

export const chatSearchInputStyle = (props) => {
  return {
    width: "calc(100% - 30px)",
    height: "100%",
    padding: "8px",
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "20px",
    outline: "none",
    border: "none",
    color: props.theme.color.search,
    backgroundColor: "transparent",
  };
};
export const chatsMsgStyle = () => {
  return {
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
  };
};

export const chatsMsgTxtStyle = (theme) => {
  return {
    margin: "0",
    minHeight: "36px",
    color: `${theme.color.secondary}`,
    fontSize: "20px!important",
    fontWeight: "600",
    lineHeight: "30px",
    wordWrap: "break-word",
    padding: "0 16px",
  };
};

export const chatsListStyle = () => {
  return {
    height: "calc(100% - 75px)",
    width: "100%",
    overflowY: "auto",
    margin: "0",
    padding: "0",
  };
};
