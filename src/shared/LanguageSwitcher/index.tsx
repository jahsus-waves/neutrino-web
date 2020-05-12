import React from 'react';

import { Translation } from 'react-i18next';

import { getLanguageDropdownProps } from 'locales/config';

import './style.scss';

interface LanguageItem {
    label: string;
    onClick?: (...args: any[]) => void;
}
interface Props {
    langs?: LanguageItem[];
}
interface State {
    currentLang?: LanguageItem;
    langs?: LanguageItem[];
    isOpened: boolean;
}

// const chineseDomain = 'https://cn.neutrino.at';
// const handleRedirect = (locale) => {
//     if (locale === 'en') {
//         window.location.href = 'https://neutrino.at';
//     } else if (locale === 'ch' && !window.location.origin.includes(chineseDomain)) {
//         window.location.href = chineseDomain;
//     }
// };

class LanguageSwitcher extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.mapLang = this.mapLang.bind(this);
        this.handleItem = this.handleItem.bind(this);

        const { langs, default: currentLang } = getLanguageDropdownProps();
        this.state = { langs, currentLang, isOpened: false };
    }

    handleItem(item: LanguageItem, index: number) {
        const { isOpened, currentLang, langs } = this.state;

        this.setState({
            isOpened: !isOpened,
            currentLang: isOpened ? item : currentLang,
            langs: isOpened ? [item, ...langs.filter((lang) => lang.label !== item.label)] : langs,
        });
    }

    mapLang(item: LanguageItem, index: number) {
        const { isOpened } = this.state;
        return (
            <div
                onClick={() => this.handleItem(item, index)}
                className={`${index === 0 ? 'first' : !isOpened ? 'hidden' : ''} lang-item`}
            >
                <Translation>
                    {(t, obj) => {
                        console.log({ obj })
                        return  (
                            <>
                                <div onClick={() => isOpened && item.onClick(obj.i18n)}>{item.label}</div>
                                {index === 0 && (
                                    <img
                                        className={isOpened ? 'opened' : ''}
                                        src={'/static/icons/arrow-up.svg'}
                                    />
                                )}
                            </>
                        )
                    }}
                </Translation>
            </div>
        );
    }

    render() {
        // const { langs = defaultLangs } = this.props;
        const { langs } = this.state;
        // const dropdownItems = getLangDropdownItems(this.props.t)

        // if (!this.state.currentLang) {
        //     this.setState({ currentLang: dropdownItems.default, langs: dropdownItems.langs, })
        // }

        return <div className="LanguageSwitcher">{langs.map(this.mapLang)}</div>;
    }
}

export default LanguageSwitcher;
