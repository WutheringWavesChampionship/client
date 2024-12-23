import { SVGProps, Ref, forwardRef, memo } from 'react';

type IconColors = 'primary' | 'secondary' | 'disabled';

interface Props extends SVGProps<SVGSVGElement> {
  color?: IconColors;
}

const SvgComponent = (
  { color = 'primary', ...props }: Props,
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
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99993 2.3166C5.75892 2.3166 2.3166 5.75892 2.3166 9.99993C2.3166 14.2409 5.75892 17.6833 9.99993 17.6833C14.2409 17.6833 17.6833 14.2409 17.6833 9.99993C17.6833 5.75892 14.2409 2.3166 9.99993 2.3166ZM1.0166 9.99993C1.0166 5.04095 5.04095 1.0166 9.99993 1.0166C14.9589 1.0166 18.9833 5.04095 18.9833 9.99993C18.9833 14.9589 14.9589 18.9833 9.99993 18.9833C5.04095 18.9833 1.0166 14.9589 1.0166 9.99993ZM9.6916 5.60827C10.0506 5.60827 10.3416 5.89928 10.3416 6.25827V9.67493C10.3416 9.79751 10.3888 9.97872 10.4958 10.1665C10.6029 10.3543 10.7348 10.487 10.8396 10.5491L10.8414 10.5501L13.4247 12.0918C13.733 12.2757 13.8337 12.6748 13.6498 12.983C13.4658 13.2913 13.0668 13.3921 12.7585 13.2081L10.1769 11.6675C10.1766 11.6673 10.1764 11.6671 10.1761 11.667C9.83131 11.4624 9.55514 11.1412 9.36655 10.8105C9.17779 10.4795 9.0416 10.0774 9.0416 9.67493V6.25827C9.0416 5.89928 9.33262 5.60827 9.6916 5.60827Z"
      fill={`var(--icons-${color})`}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconClock };
