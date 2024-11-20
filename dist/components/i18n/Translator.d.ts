import { TOptions } from 'i18next';
import { $Dictionary } from 'i18next/typescript/helpers';
type options = TOptions<$Dictionary>;
type TranslatorProps = {
    path: string | string[];
    suffix?: string;
    options?: options;
};
declare const Translator: ({ path, options, suffix }: TranslatorProps) => JSX.Element;
export declare const useTranslation: () => {
    t: (path: string | string[], options?: options | undefined) => string;
    ready: boolean;
    i18n: import('i18next').i18n;
};
export { Translator };
export default Translator;
