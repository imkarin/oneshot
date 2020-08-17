import Head from 'next/head'
import Layout from '../components/Layout'
import CaseCard from '../components/organisms/CaseCard'
import TextPrimary from '../components/organisms/TextPrimary'
import Figure from '../components/organisms/Figure'
import LogoShowcase from '../components/organisms/LogoShowcase'
import TextSecondary from '../components/organisms/TextSecondary'
import Header from '../components/organisms/Header'

const Diensten = () => {
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
                <Header
                h1Text="Diensten." 
                pText="Diensten." 
                linkText="Bekijk onze diensten" 
                linkSrc="#" />

                <section>
                    <div className="row">
                        <div className="col one-of-four">
                            <TextPrimary 
                            buttonHref="#"
                            buttonText="Diensten"
                            h4Text="Our specialty" 
                            h2Text="Zo kunnen wij je helpen" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/branding.png"
                            imgAlt="alt"
                            strongText="Branding" 
                            pText="Bedrijfsidentiteit" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/pencil-visual-design.png"
                            imgAlt="alt"
                            strongText="Visual Design" 
                            pText="Visual Design" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/web-development.png"
                            imgAlt="alt"
                            strongText="Web Development" 
                            pText="Web development" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col one-of-two">
                            <TextPrimary 
                            h4Text="Werkwijze" 
                            h2Text="Wij zijn digitale duizendpoten met een creatieve geest." 
                            buttonHref="#"
                            buttonText="Onze aanpak" />
                        </div>
                    </div>
                </section>

                <section>
                    <LogoShowcase logos={logos} />
                </section>
            </Layout>
        </>
    )
}

export default Diensten