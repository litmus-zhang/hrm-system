import Button from "./Button";

import { FaBeer } from "react-icons/fa";
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodoc"],
  // decorators: [
  //   (story) => (
  //     <div>
  //       <FaBeer /> {story()}{" "}
  //     </div>
  //   ),
  // ],
};

export const Solid = {
  args: {
    type: "button",
    variants: "solid",
    text: "My Full Button",
  },
};

export const Outline = {
  args: {
    ...Solid.args,
    variants: "outline",
  },
};
