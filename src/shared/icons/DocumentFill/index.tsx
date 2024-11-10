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
      d="M9.40735 1.08276H6.01372C5.26278 1.08276 4.64904 1.66382 4.64904 2.38322V3.03346C4.64904 3.75286 5.25556 4.33392 6.00649 4.33392H9.40735C10.1583 4.33392 10.7648 3.75286 10.7648 3.03346V2.38322C10.772 1.66382 10.1583 1.08276 9.40735 1.08276Z"
      fill="var(--icons-primary)"
    />
    <path
      d="M11.4945 3.03335C11.4945 4.13321 10.5558 5.03246 9.40776 5.03246H6.01412C4.86606 5.03246 3.92739 4.13321 3.92739 3.03335C3.92739 2.64598 3.49416 2.40387 3.13314 2.58372C2.11504 3.10252 1.42188 4.13321 1.42188 5.31607V11.8253C1.42188 13.527 2.8732 14.9173 4.64944 14.9173H10.7724C12.5487 14.9173 14 13.527 14 11.8253V5.31607C14 4.13321 13.3068 3.10252 12.2887 2.58372C11.9277 2.40387 11.4945 2.64598 11.4945 3.03335ZM7.98532 11.4241H4.82273C4.52669 11.4241 4.2812 11.1889 4.2812 10.9053C4.2812 10.6217 4.52669 10.3865 4.82273 10.3865H7.98532C8.28136 10.3865 8.52686 10.6217 8.52686 10.9053C8.52686 11.1889 8.28136 11.4241 7.98532 11.4241ZM9.87709 8.65715H4.82273C4.52669 8.65715 4.2812 8.42196 4.2812 8.13835C4.2812 7.85474 4.52669 7.61955 4.82273 7.61955H9.87709C10.1731 7.61955 10.4186 7.85474 10.4186 8.13835C10.4186 8.42196 10.1731 8.65715 9.87709 8.65715Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconDocumentFill };
