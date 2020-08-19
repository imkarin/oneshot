import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/organisms/Header'
import TextSecondary from '../components/organisms/TextSecondary'
import Image from '../components/atoms/Image'
import TextPrimary from '../components/organisms/TextPrimary'

const Diensten = () => {
    const intro = { 
        imgSrc: "/images/pencil-paint-left.svg", 
        imgAlt: "Diensten: branding, visual design, development", 
        h1Text: "Onze diensten.", 
        pText: "Wij zijn digitale duizendpoten met een berg aan creativiteit!", 
        linkText: "Dit zijn onze diensten.", 
        linkSrc: "#diensten"
    }

    return (
        <>
            <Head>
                <title>Oneshot - Design &amp; Development</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Oneshot Design en Development ontwerpt en ontwikkelt gebruiksvriendelijke websites en digitale producten.' />
                <meta name='keywords' content='Webdesign Bureau, Webdevelopment, Websites, Digital Agency, Creative Digital Agency' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <Layout intro={intro} >

                <section id="diensten">
                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Branding" 
                            strongText="Identiteit &amp; uitstraling" 
                            pText="Een eerste indruk is belangrijk, en dat snappen we. Samen met jou gaan we op zoek naar je bedrijfsidentiteit, en zorgen we voor de juiste uitstraling: we ontwerpen logo's, huisstijlen, kleurkeuzes en een sterke bedrijfsnaam." />
                        </div>

                        <div className="col one-of-two right">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/branding.png" 
                            alt="Branding" />
                        </div>
                    </div>

                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Visual Design" 
                            strongText="UI/UX &amp; visueel ontwerp" 
                            pText="Een website moet er niet alleen goed uitzien, maar moet vooral fijn zijn in gebruik. Met oog op jouw doelen en de eindgebruikers ontwerpen we visuele designs voor je website. Hiervan maken we interactieve prototypes, waarin je precies kunt zien hoe de oplossing gaat werken." />
                        </div>

                        <div className="col one-of-two left">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/pencil-paint.png" 
                            alt="Visual design" />
                        </div>
                    </div>

                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Web Development" 
                            strongText="Web Development subtitle" 
                            pText="Wij geloven niet in kant-en-klare oplossingen. We gaan doelgericht aan het werk, en zoeken naar de oplossing die het beste aansluit op jouw doelen. Zo creëren we slimme en schaalbare digitale oplossingen die niet alleen nu goed werken, maar ook in de  toekomst. " />
                        </div>

                        <div className="col one-of-two right">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/web-development.png" 
                            alt="Web development" />
                        </div>
                    </div>
                </section>

                <img src="/images/wave-glow.svg" alt="Wave glow background" className="wave" />

                <section>
                    <div className="row aligned-bottom">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Waar sta je nu?" 
                            strongText="Klaar voor de start" 
                            pText="Je hebt een geweldig idee, en hebt misschien zelfs al een team verzameld. Nu is het tijd om je ideeën te realiseren. Laten we kijken naar de mogelijkheden, en je een voorloop geven op de competitie." />
                        </div>
                        <div className="col one-of-two">
                            <TextSecondary
                            strongText="The next step" 
                            pText="Je website of product heeft zijn waarde bewezen en nu is het tijd voor de volgende stap. We kijken samen naar je product, en gaan op zoek naar nieuwe potentie om het nóg succesvoller te maken." />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col one-of-two">
                            <TextSecondary
                            strongText="Subtiele verbeteringen" 
                            pText="Je website of product is klaar voor visuele veranderingen of nieuwe features. Wij helpen je deze subtiele verbeteringen stuk voor stuk door te voeren en je product verder uit te breiden."
                            buttonHref="#" 
                            buttonText="Neem contact op" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Diensten