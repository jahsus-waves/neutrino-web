import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';
import Button from 'yii-steroids/ui/form/Button';

const bem = html.bem('NavTabsView');

import './NavTabsView.scss';

export default class NavTabsView extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        className: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                <ul className={bem.element('list')}>
                    {this.props.items.map((item, index) => (
                        <li
                            key={item.id}
                            className={bem(
                                bem.element('item', {active: item.isActive}),
                                item.className
                            )}
                            onClick={() => this.props.onClick(item, index)}
                        >
                            <div
                                className={bem.element('button')}
                                onClick={() => this.props.onClick(item, index)}
                            >
                                {item.label}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={bem.element('content')}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
