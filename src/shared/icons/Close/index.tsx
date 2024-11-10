import { SVGProps, Ref, forwardRef, memo } from 'react';
type IconColors = 'primary' | 'secondary' | 'disabled';

interface Props extends SVGProps<SVGSVGElement> {
  color?: IconColors;
}

const SvgComponent = (
  { rotate, color = 'primary', style, ...props }: Props,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
    style={{ transform: `rotate(${rotate || 0}deg)`, ...style }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.54048 4.54048C4.79432 4.28664 5.20588 4.28664 5.45972 4.54048L10.0001 9.08086L14.5405 4.54048C14.7943 4.28664 15.2059 4.28664 15.4597 4.54048C15.7136 4.79432 15.7136 5.20588 15.4597 5.45972L10.9193 10.0001L15.4597 14.5405C15.7136 14.7943 15.7136 15.2059 15.4597 15.4597C15.2059 15.7136 14.7943 15.7136 14.5405 15.4597L10.0001 10.9193L5.45972 15.4597C5.20588 15.7136 4.79432 15.7136 4.54048 15.4597C4.28664 15.2059 4.28664 14.7943 4.54048 14.5405L9.08086 10.0001L4.54048 5.45972C4.28664 5.20588 4.28664 4.79432 4.54048 4.54048Z"
      fill={`var(--icons-${color})`}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconClose };
