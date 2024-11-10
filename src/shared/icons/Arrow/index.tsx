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
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
    style={{ transform: `rotate(${rotate || 0}deg)`, ...style }}
  >
    <path
      d="M5.13666 7.09875L6.51283 8.70375L7.3531 9.68875C7.70893 10.1037 8.28769 10.1037 8.64352 9.68875L10.8642 7.09875C11.1558 6.75875 10.9457 6.17875 10.5384 6.17875L8.13336 6.17875L5.46248 6.17875C5.05092 6.17875 4.84514 6.75875 5.13666 7.09875Z"
      fill={`var(--icons-${color})`}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconArrow };
