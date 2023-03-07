import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/icons/beta-bus.json";

const Icon = ({ icon, iconStyle }) => {
  return (
    <IcomoonReact iconSet={iconSet} style={iconStyle} size={41} icon={icon} />
  );
};

export default Icon;
