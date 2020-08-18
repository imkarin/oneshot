import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/organisms/Header'
import TextSecondary from '../components/organisms/TextSecondary'
import Image from '../components/atoms/Image'
import TextPrimary from '../components/organisms/TextPrimary'

const Aanpak = () => {
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
                imgAlt="Aanpak"
                h1Text="Onze aanpak." 
                pText="Open-minded, flexibel en secuur. Al onze producten worden gemaakt met liefde." 
                linkText="Dit is hoe wij werken." 
                linkSrc="#" />

                <section>
                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Diving" 
                            strongText="Diving subtitle" 
                            pText="Aangenaam! Laten we elkaar leren kennen onder het genot van een goeie kop koffie. We houden een goed gesprek over jouw doelen, doelgroep, concurrenten en het probleem dat opgelost moet worden. Zo krijgen wij een goed beeld van hoe we je het best kunnen helpen.

                            Klikt het? Dan doen wij een voorstel over hoe we samen verder gaan." 
                            buttonHref="#footer" 
                            buttonText="Tijd voor een goed gesprek" />
                        </div>

                        <div className="col one-of-two right">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/meeting.png" 
                            alt="Handshake" />
                        </div>
                    </div>

                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Onderzoek" 
                            strongText="Onderzoek subtitle" 
                            pText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean felis quam." />
                        </div>

                        <div className="col one-of-two left">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/design-research.png" 
                            alt="Design onderzoek" />
                        </div>
                    </div>

                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Open &amp; iteratief proces" 
                            strongText="Open &amp; iteratief proces subtitle" 
                            pText="Nadat we de rock solid basis hebben gelegd, is het tijd voor het ontwerpproces. We zetten je ideeën om in tastbare designs: we denken niet alleen aan hoe het eruit ziet, maar vooral aan hoe het werkt. Tijdens het ontwerpproces stapelen we de designs niet op, maar houden we regelmatige check-ups: zo houden we je project on track." />
                        </div>

                        <div className="col one-of-two right">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/communication.png" 
                            alt="Communication" />
                        </div>
                    </div>
                    
                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Pixel perfect finish" 
                            strongText="Pixel perfect finish subtitle" 
                            pText="We houden van ons werk, en dat is te zien ook. Zodra we -met jouw thumbs up- een waterdicht concept hebben, gaan we aan de slag. We bouwen jouw nieuwe product met de hand en van de grond af. Zo houden we het slim, schaalbaar en onderhoudsvriendelijk. Zodat je product niet alleen nu goed werkt, maar ook in de toekomst!" />
                        </div>

                        <div className="col one-of-two left">
                            <Image 
                            type = "bigIllustration" 
                            src="/images/web-development.png" 
                            alt="Pixel perfect development" />
                        </div>
                    </div>
                </section>

                <img src="/images/wave-glow.svg" alt="Wave glow background" className="wave" />

                <section>
                    <div className="row">
                        <div className="col one-of-two">
                            <TextPrimary 
                            h4Text="Klinkt goed?" 
                            h2Text="Klinkt goed? Laten we samenwerken!"
                            buttonHref="#"
                            buttonText="Neem contact op" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Aanpak