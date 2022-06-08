/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../font/font-awesome/css/font-awesome.min.css"/>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../font/mdi-font/css/material-design-iconic-font.min.css"/>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../vendor/bootstrap4/bootstrap.min.css"/>
                    <link rel="stylesheet" type="text/css" href="../vendor/owl-carousel/animate.css"/>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../vendor/owl-carousel/owl.carousel.min.css"/>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../vendor/owl-carousel/owl.theme.default.min.css"/>
                    <link rel="stylesheet" type="text/css" href="../vendor/revolution/settings.css"/>
                    <link rel="stylesheet" type="text/css" href="../vendor/revolution/navigation.css"/>
                    <link rel="stylesheet" type="text/css" href="../vendor/revolution/layers.css"/>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="../vendor/lightbox2/src/css/lightbox.css"/>
                    <link rel="stylesheet" type="text/css" href="../css/font.css"/><link rel="stylesheet" type="text/css" href="../css/style.css"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async(ctx) => {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache({key: 'css'});
    const {extractCriticalToChunks} = createEmotionServer(cache);
    ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => <App emotionCache={cache} {...props}/>
    });
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles
        .styles
        .map((style) => (<style data-emotion={`${style
            .key} ${style
            .ids
            .join(' ')}`} key={style.key} // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
            __html: style.css
        }}/>));
    return {
        ...initialProps,
        styles: [
            ...React
                .Children
                .toArray(initialProps.styles),
            ...emotionStyleTags
        ]
    };
};