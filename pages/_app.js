import "../styles/font/font-awesome/css/font-awesome.min.css";
import "../styles/font/mdi-font/css/material-design-iconic-font.min.css";
import "../styles/vendor/bootstrap4/bootstrap.min.css";
import "../styles/vendor/lightbox2/src/css/lightbox.css";
import "../styles/css/style.css";
import "../styles/css/font.css";
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {StoreProvider} from "../utils/Store";
import { SnackbarProvider } from "notistack";

const clientSideEmotionCache = createCache({key: 'css'});

function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache
}) {
    return (
        <CacheProvider value={emotionCache}>
            <SnackbarProvider anchorOrigin={{vertical: "bottom", horizontal: "center",}}>
                <StoreProvider>
                    <Component {...pageProps}/>
                </StoreProvider>
            </SnackbarProvider>
        </CacheProvider>
    );
}

export default MyApp