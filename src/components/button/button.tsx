import React from "react";

type ButtonProps = {
  icon?: string;
  label: string;
  to?: string;
  color?: string;
  variant?: string;
  loading?: boolean;
};

/**
 * Button
 * @param {string} icon
 * @param {string} label
 * @param {string} to
 * @param {string} color - (success, primary, secondary, warning, error)
 * @param {string} variant - (contained, outlined, text)
 * @param {bool} loading
 */
const Button = ({ icon, label, to, ...props }: ButtonProps) => {
  return (
    <a href={to} {...props}>
      {icon} {label}
    </a>
  );
};

export default Button;
