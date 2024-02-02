import { HelpWrapper } from "./NeedHelp.styled";

const NeedHelp = () => {
  return (
    <>
      <HelpWrapper>
        <div className="tempDiv"></div>
        <p className="helpText">
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </p>
        <button type="button" className="helpBtn">
          Need help?
        </button>
      </HelpWrapper>
    </>
  );
};
export default NeedHelp;
