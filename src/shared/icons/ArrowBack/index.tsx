import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  { rotate, style, ...props }: SVGProps<SVGSVGElement>,
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
      d="M8.43455 4.48213C8.6884 4.73597 8.6884 5.14753 8.43455 5.40137L4.48584 9.35008H17.0833C17.4423 9.35008 17.7333 9.6411 17.7333 10.0001C17.7333 10.3591 17.4423 10.6501 17.0833 10.6501H4.48584L8.43455 14.5988C8.6884 14.8526 8.6884 15.2642 8.43455 15.518C8.18071 15.7719 7.76916 15.7719 7.51532 15.518L2.45698 10.4597C2.33508 10.3378 2.2666 10.1725 2.2666 10.0001C2.2666 9.82769 2.33508 9.66236 2.45698 9.54046L7.51532 4.48213C7.76916 4.22829 8.18071 4.22829 8.43455 4.48213Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconArrowBack };
