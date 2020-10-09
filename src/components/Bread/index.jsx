import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import Svg from '../Svg';
import menu from '../Side/config';

class Bread extends React.PureComponent {
    constructor() {
        super();
        const svgMap = new Map();
        const nameMap = new Map();
        const mapMenu = (item) => {
            svgMap.set(item.key, item.svg);
            nameMap.set(item.key, item.name);
            if (item.child) {
                item.child.forEach(mapMenu);
            }
        };
        menu.forEach(mapMenu);
        this.svgMap = svgMap;
        this.nameMap = nameMap;
    }

    render() {
        const breadItemArray = [];
        breadItemArray.push(
            <Breadcrumb.Item key={'/'}>
                <Link to={'/'}>
                    <Svg type={this.svgMap.get('#')}/>仪表盘
                </Link>
            </Breadcrumb.Item>
        );
        const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        pathSnippets.forEach((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const name = this.nameMap.get(pathSnippets[index]);
            if (name) {
                const svg = this.svgMap.get(pathSnippets[index]);
                if (svg) {
                    breadItemArray.push(
                        <Breadcrumb.Item key={url}>
                            <Link to={url}>
                                <Svg type={svg}/>
                                {name}
                            </Link>
                        </Breadcrumb.Item>
                    );
                } else {
                    breadItemArray.push(
                        <Breadcrumb.Item key={url}>
                            <Link to={url}>
                                {name}
                            </Link>
                        </Breadcrumb.Item>
                    );
                }
            }
        });

        return (
            <Breadcrumb>
                {breadItemArray}
            </Breadcrumb>
        );
    }
}

export default withRouter(Bread);
