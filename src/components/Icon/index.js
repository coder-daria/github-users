// Dependencies
import * as React from "react";
import PropTypes from "prop-types";
// Custom
import ICONS from "../../constants/icons";

const Icon = props => {
  const { iconName, className, width, size, height, onClick } = props;
  return (
    <svg
      width={width || size}
      height={height || size}
      className={className}
      viewBox="0 0 32 32"
      onClick={onClick || null}
    >
      {Array.isArray(ICONS[iconName]) ? (
        ICONS[iconName].map((p, i) => <path key={i} d={p} />)
      ) : (
        <path d={ICONS[iconName]} />
      )}
    </svg>
  );
};

Icon.defaultProps = {
  width: 0,
  height: 0,
  size: 32
};

Icon.propTypes = {
  height: PropTypes.number,
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  width: PropTypes.number
};

export default Icon;
