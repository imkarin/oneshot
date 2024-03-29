import Head from 'next/head'
import Layout from '../components/Layout'
import CaseCard from '../components/organisms/CaseCard'
import TextPrimary from '../components/organisms/TextPrimary'
import Figure from '../components/organisms/Figure'
import LogoShowcase from '../components/organisms/LogoShowcase'

const Home = () => {
    const intro = {
        homePage: "homePage",
        h1Text: "We combine strategy, creativity & technology into digital experiences.", 
        pText: "Oneshot vertaalt uw ideeën in digitale oplossingen.", 
        linkText: "Bekijk onze diensten", 
        linkSrc: "/diensten", 
        imgSrc: "/images/home-hero.svg", 
        imgAlt: "Creative digital webagency header"
    }

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

            <Layout intro={intro}>                
                {/* <section>
                    <div className="row">
                        <div className="col one-of-three">
                            <CaseCard 
                            h4Text="EasyVoIP" 
                            h3Text="Nieuwe website" 
                            imgSrc="/images/purplecircle.png"
                            imgAlt="Case" />
                        </div>

                        <div className="col one-of-three">
                            <CaseCard 
                            h4Text="ProlinQ" 
                            h3Text="Nieuwe website" 
                            imgSrc="/images/bluecircle.png"
                            imgAlt="Case" />
                        </div>

                        <div className="col one-of-three">
                            <CaseCard 
                            h4Text="EasyVoIP" 
                            h3Text="Nieuwe website" 
                            imgSrc="/images/pinkcircle.png"
                            imgAlt="Case" />
                        </div>
                    </div>
                </section> */}

                <section>
                    <div className="row">
                        <div className="col one-of-four">
                            <TextPrimary 
                            buttonHref="/diensten"
                            buttonText="Diensten"
                            h4Text="Our specialties" 
                            h2Text="Zo kunnen wij je helpen" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/branding.png"
                            imgAlt="alt"
                            strongText="Branding" 
                            pText="Identiteit &amp; uitstraling" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/pencil-visual-design.png"
                            imgAlt="alt"
                            strongText="Visual Design" 
                            pText="UI/UX &amp; visueel ontwerp" />
                        </div>

                        <div className="col one-of-four">
                            <Figure 
                            imgSrc="/images/web-development.png"
                            imgAlt="alt"
                            strongText="Web Development" 
                            pText="Snelle &amp; betrouwbare websites" />
                        </div>
                    </div>
                </section>

                <img src="/images/wave-glow.svg" alt="Wave glow background" className="wave" />

                <section>
                    <div className="row">
                        <div className="col one-of-two">
                            <TextPrimary 
                            h4Text="Werkwijze" 
                            h2Text="Wij zijn digitale duizendpoten met een passie voor webdesign." 
                            buttonHref="/aanpak"
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

export default Home