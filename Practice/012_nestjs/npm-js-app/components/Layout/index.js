import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

import { Container } from 'reactstrap';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default ({ children }) => (
  <div>
    <Head>
      <title>Nextjs App</title>
    </Head>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </div>
);
