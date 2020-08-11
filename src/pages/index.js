import Head from 'next/head'
import Layout from '../components/Layout'
import TextPrimary from '../components/organisms/TextPrimary'
import Figure from '../components/organisms/Figure'
import LogoShowcase from '../components/organisms/LogoShowcase'
import TextSecondary from '../components/organisms/TextSecondary'

const Home = () => {
    const logos = [
        {src: "/images/logo/logo-dark.png", alt: "logo"}, 
        {src: "/images/logo/logo-dark.png", alt: "leeogo"}, 
        {src: "/images/logo/logo-dark.png", alt: "loeo"}, 
        {src: "/images/logo/logo-dark.png", alt: "logeeo"}
    ]

    return (
        <>
            <Head>
                <title>Oneshot - Design &amp; Development</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Oneshot Design en Development ontwerpt en ontwikkelt gebruiksvriendelijke websites en digitale producten.' />
                <meta name='keywords' content='Webdesign Bureau, Webdevelopment, Websites, Digital Agency, Creative Digital Agency' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <Layout>
                <section>
                    <div className="col one-of-four">
                        <TextPrimary 
                        buttonHref="#"
                        buttonText="Click me"
                        h4Text="Hello there" 
                        h2Text="Zo kunnen wij je helpen" />
                    </div>

                    <div className="col one-of-four">
                        <Figure 
                        imgSrc="/images/branding.png"
                        imgAlt="alt"
                        strongText="Hello there" 
                        pText="Refreshed brand identity" />
                    </div>

                    <div className="col one-of-four">
                        <Figure 
                        imgSrc="/images/pencil-visual-design.png"
                        imgAlt="alt"
                        strongText="ProlinQ" 
                        pText="New website" />
                    </div>

                    <div className="col one-of-four">
                        <Figure 
                        imgSrc="/images/web-development.png"
                        imgAlt="alt"
                        strongText="EasyVoIP" 
                        pText="New website" />
                    </div>
                </section>

                <section>                    
                    <LogoShowcase logos={logos} />
                </section>

                <section>
                    <div className="col one-of-two">
                        <TextSecondary 
                        h2Text="Benieuwd wat wij voor jouw bedrijf kunnen betekenen?" 
                        pText="Dan is het hoog tijd voor een goed gesprek. Wij nemen de cake mee, houd jij de koffie warm?" 
                        buttonHref="#"
                        buttonText="Button yeehaw" />
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Home