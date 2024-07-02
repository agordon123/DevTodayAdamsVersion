import IconWrapper from './IconWrapper';

const Search = (props: any) => {
  return (
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666748 7.89169C0.666748 3.90146 3.86703 0.666748 7.81478 0.666748C9.71056 0.666748 11.5287 1.42794 12.8692 2.78288C14.2097 4.13782 14.9628 5.97551 14.9628 7.89169C14.9628 11.8819 11.7625 15.1166 7.81478 15.1166C3.86703 15.1166 0.666748 11.8819 0.666748 7.89169ZM14.8445 13.712L16.9734 15.4304H17.0104C17.4411 15.8658 17.4411 16.5716 17.0104 17.0069C16.5797 17.4422 15.8814 17.4422 15.4507 17.0069L13.684 14.9821C13.517 14.8139 13.4231 14.5854 13.4231 14.3471C13.4231 14.1087 13.517 13.8802 13.684 13.712C14.0061 13.3921 14.5224 13.3921 14.8445 13.712Z"
      />
    </svg>
  );
};

export default IconWrapper(Search);