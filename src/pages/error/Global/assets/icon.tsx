import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={714}
    height={45}
    viewBox="0 0 714 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M283.948 31.9572H272.109C269.281 31.9572 266.99 29.711 266.99 26.9421V18.0489C266.99 16.5204 267.689 15.152 268.788 14.2333H268.789C269.682 13.4865 270.841 13.0352 272.108 13.0352H283.948L283.948 31.9572Z"
      fill="var(--blue-20)"
    />
    <path
      d="M311.547 41.8461H287.897C284.245 41.8461 281.284 38.9447 281.284 35.3651V9.63441C281.284 6.05613 284.245 3.15479 287.897 3.15479H311.547V41.8461Z"
      fill="var(--borders-input-active)"
    />
    <path
      d="M316.755 0.8507V44.1493C316.755 44.6191 316.366 45 315.887 45H312.416C311.937 45 311.548 44.6191 311.548 44.1493V0.8507C311.548 0.380853 311.937 0 312.416 0H315.887C316.366 0 316.755 0.380853 316.755 0.8507Z"
      fill="var(--borders-input-active)"
    />
    <path
      d="M316.754 16.6937V10.0996H332.849C334.707 10.0996 336.214 11.5758 336.214 13.3967C336.214 15.2176 334.707 16.6937 332.849 16.6937H316.754Z"
      fill="var(--dark-80)"
    />
    <path
      d="M316.754 34.9007V28.3066H332.849C334.707 28.3066 336.214 29.7828 336.214 31.6037C336.214 33.4246 334.707 34.9007 332.849 34.9007H316.754Z"
      fill="var(--dark-80)"
    />
    <path
      d="M311.548 41.8442V3.15283L309.641 3.15283V41.8442H311.548Z"
      fill="var(--dark-80)"
    />
    <path
      d="M281.285 31.9565V13.0352H280.049V31.9565H281.285Z"
      fill="var(--dark-80)"
    />
    <path
      d="M424.248 31.9572H436.088C438.915 31.9572 441.206 29.711 441.206 26.9421V18.0489C441.206 16.5204 440.508 15.152 439.408 14.2333H439.407C438.514 13.4865 437.355 13.0352 436.088 13.0352H424.248V31.9572Z"
      fill="var(--blue-20)"
    />
    <path
      d="M396.65 41.8461H420.3C423.952 41.8461 426.913 38.9447 426.913 35.3651V9.63441C426.913 6.05613 423.952 3.15479 420.3 3.15479H396.65V41.8461Z"
      fill="var(--borders-input-active)"
    />
    <path
      d="M391.443 0.8507V44.1493C391.443 44.6191 391.832 45 392.312 45H395.782C396.262 45 396.65 44.6191 396.65 44.1493V0.8507C396.65 0.380853 396.262 0 395.782 0H392.312C391.832 0 391.443 0.380853 391.443 0.8507Z"
      fill="var(--borders-input-active)"
    />
    <path
      d="M398.557 41.8442V3.15283L396.65 3.15283V41.8442H398.557Z"
      fill="var(--dark-80)"
    />
    <path
      d="M428.148 31.9585V13.0371H426.912V31.9585H428.148Z"
      fill="var(--dark-80)"
    />
    <path
      d="M266.991 19.5864H0V25.4084H266.991V19.5864Z"
      fill="var(--borders-input-active)"
    />
    <path
      d="M714 20.186H441.207V26.0081H714V20.186Z"
      fill="var(--borders-input-active)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconErrorGlobal };