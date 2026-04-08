import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
};

/**
 * Apple-style squircle (superellipse approximation via ~22% border-radius on square).
 */
export function BrandLogo({ size = 32, className = "" }: BrandLogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden bg-black/20 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "22%",
      }}
    >
      <Image
        src="/icon.png"
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-cover"
        aria-hidden
        priority
      />
    </span>
  );
}
