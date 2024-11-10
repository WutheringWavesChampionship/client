import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={16}
    height={14}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.31626 1.56436C6.16484 1.31285 5.8498 1.23911 5.62017 1.37573L5.61145 1.38092L4.45807 2.04084C4.14151 2.22174 4.03177 2.63306 4.21292 2.94658C4.5803 3.58042 4.6893 4.29413 4.34659 4.88883C4.00394 5.48343 3.33123 5.74675 2.60007 5.74675C2.23349 5.74675 1.9334 6.0494 1.9334 6.41342V7.58675C1.9334 7.95077 2.23349 8.25342 2.60007 8.25342C3.33123 8.25342 4.00394 8.51673 4.34659 9.11134C4.68923 9.70591 4.57993 10.4202 4.21273 11.0539C4.03184 11.3674 4.14129 11.7783 4.45775 11.9591L5.62022 12.6244C5.84985 12.761 6.16483 12.6873 6.31625 12.4358L6.38748 12.3128C6.75471 11.6792 7.32003 11.2284 8.0059 11.2284C8.69227 11.2284 9.25591 11.6795 9.61993 12.3138C9.62015 12.3142 9.62038 12.3146 9.6206 12.315L9.69055 12.4358C9.84197 12.6873 10.157 12.7611 10.3866 12.6244L10.3953 12.6192L11.5487 11.9593C11.8642 11.7791 11.9762 11.3743 11.7932 11.0524C11.4267 10.419 11.3178 9.70544 11.6602 9.11134C12.0029 8.51673 12.6756 8.25342 13.4067 8.25342C13.7733 8.25342 14.0734 7.95077 14.0734 7.58675V6.41342C14.0734 6.04684 13.7708 5.74675 13.4067 5.74675C12.6756 5.74675 12.0029 5.48343 11.6602 4.88883C11.3176 4.29423 11.4269 3.57994 11.7941 2.94618C11.9749 2.6327 11.8655 2.22184 11.549 2.04103L10.3866 1.3758C10.1569 1.23918 9.84195 1.31285 9.69054 1.56436L9.61932 1.68737C9.25209 2.32095 8.68677 2.77175 8.0009 2.77175C7.31451 2.77175 6.75086 2.32065 6.38685 1.68629C6.38663 1.68591 6.38641 1.68553 6.38619 1.68515L6.31626 1.56436ZM5.01145 0.341577C5.83364 -0.143992 6.87413 0.155052 7.34904 0.953307L7.35269 0.95944L7.42727 1.08835C7.66328 1.50005 7.8927 1.57175 8.0009 1.57175C8.11001 1.57175 8.34143 1.49898 8.58081 1.08613L8.65772 0.953285C9.13263 0.155031 10.1732 -0.143991 10.9953 0.341577L12.1444 0.999137C13.0412 1.51158 13.3451 2.66044 12.8329 3.54692C12.5936 3.95974 12.646 4.19603 12.6999 4.28967C12.7539 4.3834 12.9312 4.54675 13.4067 4.54675C14.4294 4.54675 15.2734 5.37999 15.2734 6.41342V7.58675C15.2734 8.6094 14.4402 9.45342 13.4067 9.45342C12.9312 9.45342 12.7539 9.61676 12.6999 9.71049C12.646 9.80413 12.5932 10.0397 12.8325 10.4525L12.8344 10.4557C13.3436 11.347 13.0419 12.4882 12.1444 13.001L10.9954 13.6586C10.997 13.6576 10.9986 13.6567 11.0002 13.6557L10.6934 13.1401L10.9914 13.6608L10.9954 13.6586C10.1732 14.1442 9.13267 13.8451 8.65775 13.0469L8.65411 13.0407L8.58081 12.914L8.57953 12.9118C8.34352 12.5001 8.1141 12.4284 8.0059 12.4284C7.89677 12.4284 7.66527 12.5012 7.42584 12.9143L7.34908 13.0469C6.87417 13.8451 5.83364 14.1442 5.01145 13.6586L5.01539 13.6608L5.3134 13.1401L5.00662 13.6557C5.00823 13.6567 5.00984 13.6576 5.01145 13.6586L3.86238 13.001C2.96586 12.4885 2.66176 11.3396 3.17388 10.4532C3.41316 10.0404 3.36083 9.80413 3.30687 9.71049C3.25286 9.61676 3.07557 9.45342 2.60007 9.45342C1.56664 9.45342 0.733398 8.6094 0.733398 7.58675V6.41342C0.733398 5.39077 1.56664 4.54675 2.60007 4.54675C3.07557 4.54675 3.25286 4.3834 3.30687 4.28967C3.36083 4.19603 3.41358 3.96046 3.17429 3.54763C2.66217 2.66127 2.96554 1.51185 3.86206 0.999322L5.01145 0.341577ZM5.01145 0.341577C5.00984 0.342528 5.00823 0.343482 5.00662 0.344438L5.3134 0.860082L5.01539 0.339322L5.01145 0.341577ZM8.00006 5.60008C7.22687 5.60008 6.60006 6.22689 6.60006 7.00008C6.60006 7.77328 7.22687 8.40008 8.00006 8.40008C8.77326 8.40008 9.40007 7.77328 9.40007 7.00008C9.40007 6.22689 8.77326 5.60008 8.00006 5.60008ZM5.40006 7.00008C5.40006 5.56414 6.56412 4.40008 8.00006 4.40008C9.436 4.40008 10.6001 5.56414 10.6001 7.00008C10.6001 8.43602 9.436 9.60008 8.00006 9.60008C6.56412 9.60008 5.40006 8.43602 5.40006 7.00008Z"
      fill="var(--icons-primary)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconGear };