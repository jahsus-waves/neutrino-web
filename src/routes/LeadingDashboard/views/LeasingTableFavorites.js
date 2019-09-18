import React from 'react';
import './LeasingTableFavorites.scss';

import {html} from 'components';
const bem = html.bem('LeasingFavorites');

export default class Favorites extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const star = (
            <svg className={bem.element('star')} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.23267 8.55743L6 8.43511L5.76733 8.55743L3.13735 9.94009L3.63963 7.01157L3.68407 6.75249L3.49584 6.56901L1.36814 4.49502L4.30854 4.06775L4.56868 4.02995L4.68501 3.79423L6 1.12978L7.31499 3.79423L7.43132 4.02995L7.69146 4.06775L10.6319 4.49502L8.50416 6.56901L8.31593 6.75249L8.36036 7.01157L8.86265 9.94009L6.23267 8.55743Z"/>
            </svg>
        );

        return (
            <div className={bem.block()}>
                {star}
            </div>
        )
    }
}