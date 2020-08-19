import Head from 'next/head'
import Image from '../components/atoms/Image'
import Layout from '../components/Layout'
import TextPrimary from '../components/organisms/TextPrimary'
import TextSecondary from '../components/organisms/TextSecondary'

const Aanpak = () => {
    const intro = { 
        imgSrc: "/images/pencil-paint-left.svg", 
        imgAlt: "Aanpak",
        h1Text: "Onze aanpak.", 
        pText: "Open-minded, flexibel en secuur. Al onze producten worden gemaakt met liefde.", 
        linkText: "Dit is hoe wij werken.", 
        linkSrc: "#aanpak" 
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

                <section id="aanpak">
                    <div className="row aligned-center">
                        <div className="col one-of-two">
                            <TextSecondary 
                            h2Text="Diving" 
                            strongText="Diving subtitle" 
                            pText="Aangenaam! Laten we elkaar leren kennen onder het genot van een kop koffie. We houden een goed gesprek over jouw doelen, doelgroep, concurrenten en het probleem dat opgelost moet worden. Zo krijgen wij een goed beeld van hoe we je het best kunnen helpen.

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
                            pText="Allereerst achterhalen we de redenen waarom je een nieuwe website wilt en wat je ermee wilt bereiken. We doen grondig onderzoek naar je doelgroep, en maken een plan van aanpak die de basis vormt van een goedwerkende oplossing." />
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
                            buttonHref="#footer"
                            buttonText="Neem contact op" />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Aanpak