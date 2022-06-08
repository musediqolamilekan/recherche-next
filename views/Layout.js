import Head from 'next/head'
import React from 'react'
import PublicBreadcumb from '../components/shared/breadcrumb/PublicBreadcumb'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'

const Layout = ({ title, description, pageTitle, children }) => {
  return (
    <>
        <Head>
            <title>{title ? `${title} - Recherche` : 'Recherche'}</title>
            {description && <meta name="description" content={description}></meta>}
        </Head>
        <Header />
        {/* <PublicBreadcumb pageTitle={pageTitle} /> */}
        <section>
          {children}
        </section>
        <Footer />
    </>
  )
}

export default Layout