import { FC } from "react";
import styles from "./styles.module.css";

type IconName = "react" | "loup";

interface IconProps {
  name: IconName;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, size = 36 }) => {
  const iconPath = `/src/assets/${name}.svg`;

  if (!iconPath) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <i
      className={styles.icon}
      style={{
        maskImage: `url(${iconPath})`,
        WebkitMaskImage: `url(${iconPath})`,
        width: size,
        height: size,
      }}
    />
  );
};
