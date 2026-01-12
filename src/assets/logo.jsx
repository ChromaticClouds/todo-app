// @ts-check

/**
 * @typedef {Object} LogoProps
 * @property {'default' | 'icon'} [variant]
 * @property {number} [size = 28]
 * @property {string} [color]
 */

/**
 * @param {LogoProps} props
 * @returns {React.JSX.Element}
 */
const LogoIcon = ({ size, color }) => {
  return (
    <svg
      id="todo"
      data-name="todo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 656.1 656.1"
      height={size}
    >
      <rect fill="#fff" width="656.1" height="656.1" rx="130.38" />
      <circle fill={color} cx="328.05" cy="328.05" r="245.56" />
      <rect
        fill="#fff"
        x="391.07"
        y="469.94"
        width="81.71"
        height="201.22"
        transform="translate(-460.89 288.58) rotate(-45)"
      />
      <rect
        fill="#fff"
        x="513.4"
        y="378.63"
        width="81.71"
        height="308.2"
        transform="translate(355.08 -419.83) rotate(45)"
      />
    </svg>
  );
};

const fontSizeMap = {
  small: 'text-sm',
  medium: 'text-xl',
  large: 'text-2xl',
};

/**
 * @param {LogoProps & { fontSize: 'small' | 'medium' | 'large' }} props
 * @returns {React.JSX.Element}
 */
export const Logo = ({
  variant = 'default',
  size = 28,
  color = 'var(--primary)',
  fontSize = 'small',
}) => {
  const logo = <LogoIcon size={size} color={color} />;

  return variant === 'default' ? (
    <div className="flex items-center gap-3">
      <div className="shadow-md rounded-md">{logo}</div>
      <h2 className={`font-bold ${fontSizeMap[fontSize]}`}>Todo App</h2>
    </div>
  ) : (
    <div className="shadow-md rounded-md">{logo}</div>
  );
};
