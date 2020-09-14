import React from "react";

/**
 * Button
 * @param {string} icon
 * @param {string} label
 * @param {string} color - (success, primary, secondary, warning, error)
 * @param {string} variant - (contained, outlined, text)
 * @param {bool} loading
 */
const Button = ({ icon, label, href, ...props }) => {
  return (
    <a href={href} {...props}>
      {icon} {label}
    </a>
  );
};

export default Button;
