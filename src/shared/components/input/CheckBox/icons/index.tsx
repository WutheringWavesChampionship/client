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
      d="M14.0405 3.95989C14.431 4.35041 14.431 4.98357 14.0405 5.3741L7.37381 12.0408C6.98329 12.4313 6.35013 12.4313 5.9596 12.0408L2.62627 8.70743C2.23574 8.31691 2.23574 7.68374 2.62627 7.29322C3.01679 6.90269 3.64996 6.90269 4.04048 7.29322L6.66671 9.91945L12.6263 3.95989C13.0168 3.56936 13.65 3.56936 14.0405 3.95989Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconCheckboxChecked };
