import { type IPdfElement } from '@chainlit/react-client';

interface Props {
  element: IPdfElement;
}

const PDFElement = ({ element }: Props) => {
  if (!element.url) {
    return null;
  }
  const url = element.page
    ? `${element.url}#page=${element.page}`
    : element.url;
  return (
    <iframe
      className={`${element.display}-pdf`}
      src={url}
      style={{ border: 'none' }}
      width="100%"
      height="100%"
    ></iframe>
  );
};

const PDF = PDFElement;

export { PDFElement, PDF };
