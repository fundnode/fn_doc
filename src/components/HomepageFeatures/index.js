import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: 'Documentation',
        Svg: require('@site/static/img/fundnode.svg').default,
        description: (
            <>
            </>
        ),
        link: '/docs/documentations/overview'
    },
    {
        title: 'Fundnode API',
        Svg: require('@site/static/img/fundnode.svg').default,
        description: (
            <>
            </>
        ),
        link: '/docs/fundnode/fundnode-api'
    },
    {
        title: 'Fund Data',
        Svg: require('@site/static/img/fundnode.svg').default,
        description: (
            <>
            </>
        ),
        link: '/docs/fund-data'
    },
];

function Feature({ Svg, title, description, link }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Link to={link}>
                    <Svg className={styles.featureSvg} role="img" />
                </Link>
            </div>
            <div className="text--center padding-horiz--md">
                <Link to={link}>
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
