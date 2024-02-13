import { LoaderDivWrapper } from "./Loader.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderDivWrapper>
      <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        color="black"
        ariaLabel="rotating-lines-loading"
        strokeColor="#868e96"
      />
    </LoaderDivWrapper>
  );
}
