import Image from "next/image";

interface SocialIconsProps {
  src: string;
  width: number;
  height: number;
  href: string;
}

export const SocialIcons = ({
  src,
  width,
  height,
  href,
}: SocialIconsProps): JSX.Element => (
  <a href={href}>
    <Image
      src={src}
      alt="Icone de uma rede social"
      width={width}
      height={height}
    />
  </a>
);
