import Image from "next/image";

interface SocialIconsProps {
  src: string;
  width: number;
  height: number;
}

export const SocialIcons = ({
  src,
  width,
  height,
}: SocialIconsProps): JSX.Element => (
  <Image
    src={src}
    alt="Icone de uma rede social"
    width={width}
    height={height}
  />
);
