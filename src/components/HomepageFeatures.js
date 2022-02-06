import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('../../static/img/httpx-cli.svg').default,
        description: require('../../static/img/httpx-shebang.png').default,
    },
    {
        title: 'HTTP Support',
        Svg: require('../../static/img/http-logo.svg').default,
        description: require('../../static/img/http-post.png').default,
    },
    {
        title: 'gRPC support',
        Svg: require('../../static/img/grpc-logo.svg').default,
        description: require('../../static/img/grpc-sayhello.png').default,
    },
    {
        title: 'RSocket',
        Svg: require('../../static/img/rsocket-logo.svg').default,
        description: require('../../static/img/rsocket-request.png').default,
    },
    {
        title: 'GraphQL',
        Svg: require('../../static/img/graphql-logo.svg').default,
        description: require('../../static/img/graphql-over-ws.png').default,
    },
    {
        title: 'Pub/Sub - Kafka, RabbitMQ ...',
        Svg: require('../../static/img/pub-sub.svg').default,
        description: require('../../static/img/kafka-pub.png').default,
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <img src={description}/>
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
