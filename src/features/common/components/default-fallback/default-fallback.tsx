import { LinearProgress, LinearProgressProps } from "@material-ui/core";

export const DefaultFallback: React.FC<LinearProgressProps> = (props) => {
  return <LinearProgress {...props} />;
};
