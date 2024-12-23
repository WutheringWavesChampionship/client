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
      d="M7.5001 2.6501C4.82152 2.6501 2.6501 4.82152 2.6501 7.5001C2.6501 10.1787 4.82152 12.3501 7.5001 12.3501C10.1787 12.3501 12.3501 10.1787 12.3501 7.5001C12.3501 4.82152 10.1787 2.6501 7.5001 2.6501ZM1.3501 7.5001C1.3501 4.10355 4.10355 1.3501 7.5001 1.3501C10.8966 1.3501 13.6501 4.10355 13.6501 7.5001C13.6501 10.8966 10.8966 13.6501 7.5001 13.6501C4.10355 13.6501 1.3501 10.8966 1.3501 7.5001ZM12.0405 12.0405C12.2943 11.7866 12.7059 11.7866 12.9597 12.0405L15.4597 14.5405C15.7136 14.7943 15.7136 15.2059 15.4597 15.4597C15.2059 15.7136 14.7943 15.7136 14.5405 15.4597L12.0405 12.9597C11.7866 12.7059 11.7866 12.2943 12.0405 12.0405Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconLoupe };
