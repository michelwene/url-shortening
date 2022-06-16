import { IconLogo } from "../../assets/icons";

export function Logo({ fill }) {
  return (
    <div className="items-center flex">
      <span>
        <IconLogo fill={fill} />
      </span>
    </div>
  );
}
