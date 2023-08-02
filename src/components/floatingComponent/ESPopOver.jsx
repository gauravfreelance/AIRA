import {
  arrow,
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useId,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";
import { Box, useTheme } from "@mui/material";
import React, { cloneElement, useCallback, useRef, useState } from "react";

const ESPopOver = ({
  children,
  render,
  containerPlacement = "right",
  onRightClickCallback = null,
  openOnClick = false,
  openOnHover = true,
  openOnRightClick = false,
}) => {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);

  const muiTheme = useTheme();

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: containerPlacement,
    strategy: "fixed",
    whileElementsMounted: (reference, floating, update) => {
      return autoUpdate(reference, floating, update, {
        animationFrame: true,
      });
    },
    middleware: [offset(15), flip(), shift(), arrow({ element: arrowRef })],
  });

  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]];

  const useCustomLogic = useCallback((context) => {
    // Note: all 3 of these properties are optional.
    return {
      reference: {},
    };
  }, []);

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { styles } = useTransitionStyles(context, {
    close: ({ side }) => ({
      opacity: 0,
      transform:
        side === "top" || side === "bottom" ? "scaleY(2)" : "scaleX(2)",
    }),
  });
  const { getReferenceProps } = useInteractions([
    //useClick(context),
    useHover(context, {
      enabled: openOnHover,
      handleClose: safePolygon({
        requireIntent: false,
      }),
    }),
    useCustomLogic(context),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      {open && (
        <FloatingFocusManager context={context}>
          <div style={{ zIndex: 99999, ...styles }}>
            <div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              }}
            >
              <Box
                //ref={arrowCallback}
                ref={arrowRef}
                sx={{
                  boxShadow: (theme) => theme.shadows[2],
                  position: "absolute",
                  left: arrowX != null ? `${arrowX}px` : "",
                  top: arrowY != null ? `${arrowY}px` : "",
                  width: "40px",
                  height: "40px",
                  transform: "rotate(45deg)",
                  right: "",
                  bottom: "",
                  zIndex: -1,
                  // backgroundColor: "#fff",
                  // border: "1px solid #eee",
                  [staticSide]: "-5px",
                }}
              />
              {render({
                labelId,
                descriptionId,
                close: () => {
                  setOpen(false);
                },
              })}
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default React.memo(ESPopOver);
