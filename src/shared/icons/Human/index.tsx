import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
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
      d="M10.0002 2.3166C8.05802 2.3166 6.48356 3.89107 6.48356 5.83327C6.48356 7.77547 8.05802 9.34993 10.0002 9.34993C11.9424 9.34993 13.5169 7.77547 13.5169 5.83327C13.5169 3.89107 11.9424 2.3166 10.0002 2.3166ZM5.18356 5.83327C5.18356 3.1731 7.34005 1.0166 10.0002 1.0166C12.6604 1.0166 14.8169 3.1731 14.8169 5.83327C14.8169 8.49344 12.6604 10.6499 10.0002 10.6499C7.34005 10.6499 5.18356 8.49344 5.18356 5.83327Z"
      fill="var(--icons-primary)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.19189 18.3333C2.19189 14.6309 5.8224 11.8499 10.0002 11.8499C14.178 11.8499 17.8086 14.6309 17.8086 18.3333C17.8086 18.6923 17.5175 18.9833 17.1586 18.9833C16.7996 18.9833 16.5086 18.6923 16.5086 18.3333C16.5086 15.5857 13.7224 13.1499 10.0002 13.1499C6.27805 13.1499 3.49189 15.5857 3.49189 18.3333C3.49189 18.6923 3.20088 18.9833 2.84189 18.9833C2.48291 18.9833 2.19189 18.6923 2.19189 18.3333Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconHuman };
