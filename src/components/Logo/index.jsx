import { IconLogo } from "../../assets/icons";

export function Logo({ fill }) {
  return (
    <div className="flex items-center">
      <span>
        <IconLogo fill={fill} />
      </span>
    </div>
  );
}
