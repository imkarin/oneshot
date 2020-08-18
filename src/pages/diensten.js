import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/organisms/Header'
import TextSecondary from '../components/organisms/TextSecondary'
import Image from '../components/atoms/Image'
import TextPrimary from '../components/organisms/TextPrimary'

const Diensten = () => {

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
                imgSrc="/images/pencil-paint-left.svg" 
                imgAlt="Diensten: branding, visual design, development"
                h1Text="Onze diensten." 
                pText="Wij zijn digitale duizendpoten met een berg aan creativiteit!" 
                linkText="Dit zijn onze diensten." 
                linkSrc="#" />

                <section>
                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Branding" 
                            strongText="Branding subtitle" 
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>

                        <div className="col one-of-two">
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
                            strongText="Visual Design subtitle" 
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>

                        <div className="col one-of-two first">
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
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>

                        <div className="col one-of-two">
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
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>
                        <div className="col one-of-two">
                            <TextSecondary
                            strongText="The next step" 
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col one-of-two">
                            <TextSecondary
                            strongText="Subtiele verbeteringen" 
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam."
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