import React from "react";
interface Props {
  color:string
}
export const EmailIcon = ({color}:Props) => {
  return (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.5899 2.72719L1.40594 64.2972C-1.43806 69.4812 -0.230061 74.4382 7.45694 74.4382H72.5389C80.2439 74.4382 81.4349 69.4812 78.5899 64.2972L43.6989 2.89119C42.9919 1.50819 41.9649 -0.0198057 39.7849 0.000194257C37.4669 0.0421943 36.3159 1.34419 35.5899 2.72719ZM35.4999 22.4382H43.4999V50.4382H35.4999V22.4382ZM35.4999 56.4382H43.4999V64.4382H35.4999V56.4382Z" fill={color}/>
      </svg>

  );
};
