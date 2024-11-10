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
      d="M2.75122 2.75122C2.49945 3.003 2.3166 3.43346 2.3166 4.1666V5.83327C2.3166 6.56641 2.49945 6.99687 2.75122 7.24865C3.003 7.50042 3.43346 7.68327 4.1666 7.68327H15.8333C16.5664 7.68327 16.9969 7.50042 17.2486 7.24865C17.5004 6.99687 17.6833 6.56641 17.6833 5.83327V4.1666C17.6833 3.43346 17.5004 3.003 17.2486 2.75122C16.9969 2.49945 16.5664 2.3166 15.8333 2.3166H4.1666C3.43346 2.3166 3.003 2.49945 2.75122 2.75122ZM1.83198 1.83198C2.41354 1.25042 3.23307 1.0166 4.1666 1.0166H15.8333C16.7668 1.0166 17.5863 1.25042 18.1679 1.83198C18.7494 2.41354 18.9833 3.23307 18.9833 4.1666V5.83327C18.9833 6.7668 18.7494 7.58633 18.1679 8.16789C17.8211 8.51468 17.3897 8.73782 16.8999 8.86146V15.8333C16.8999 16.6781 16.8056 17.5246 16.2704 18.1363C15.7164 18.7694 14.8476 18.9833 13.7499 18.9833H6.24994C5.15222 18.9833 4.28352 18.7694 3.72951 18.1363C3.19429 17.5246 3.09994 16.6781 3.09994 15.8333V8.86146C2.61019 8.73782 2.17877 8.51468 1.83198 8.16789C1.25042 7.58633 1.0166 6.7668 1.0166 5.83327V4.1666C1.0166 3.23307 1.25042 2.41354 1.83198 1.83198ZM4.39994 8.98327V15.8333C4.39994 16.6551 4.51391 17.0586 4.70786 17.2802C4.88302 17.4804 5.26431 17.6833 6.24994 17.6833H13.7499C14.7356 17.6833 15.1168 17.4804 15.292 17.2802C15.486 17.0586 15.5999 16.6551 15.5999 15.8333V8.98327H4.39994ZM7.83327 11.6666C7.83327 11.3076 8.12428 11.0166 8.48327 11.0166H11.5166C11.8756 11.0166 12.1666 11.3076 12.1666 11.6666C12.1666 12.0256 11.8756 12.3166 11.5166 12.3166H8.48327C8.12428 12.3166 7.83327 12.0256 7.83327 11.6666Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconDrawer };
