import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
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
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.0642 12.7857C5.41567 13.1372 5.98552 13.1372 6.33699 12.7857L14.3025 4.8202C14.654 4.46872 14.654 3.89888 14.3025 3.5474C13.951 3.19593 13.3812 3.19593 13.0297 3.5474L5.7006 10.8765L3.30251 8.47844C2.95104 8.12697 2.38119 8.12697 2.02972 8.47844C1.67825 8.82991 1.67825 9.39976 2.02972 9.75123L5.0642 12.7857Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconCheck };
