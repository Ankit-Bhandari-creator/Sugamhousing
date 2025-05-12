import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Image_Url } from '../../url/url'
import './Aboutus.css'

export default function Aboutus() {
    return (
        <>
            <Header />
            <div className="container">
                <img src={`${Image_Url}Aboutus.jpg`}></img>
            </div>
            <p className='p'>Our company</p>
            <h1 className='h1'>Who We Are </h1>
            <div className='main'>
                <div className='gp'>
                    <h2 className='h2'>Global Presence</h2>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                        sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>
                    <p>
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    </p>
                </div>
                <div className='responsibility'>
                    <h2 className='h2'>Responsibility</h2>
                    <p>
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                    </p>
                    <p>
                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed non mauris vitae erat consequat auctor eu in elit.

                        Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                </div>
            </div>
            <div className='img'>
                <img src={`${Image_Url}image2.jpg`}></img>
            </div>

            <div className='main2'>
                <div className='gp'>
                    <h2 className='h2'>Our Vision</h2>
                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                    </p>
                </div>
                <div className='responsibility'>
                    <h2 className='h2'>Our Vision</h2>
                    <p>
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed non mauris vitae erat consequat auctor eu in elit.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Mauris in erat justo.
                    </p>
                </div>
            </div>
            <div className='testing'>
                <img src={`${Image_Url}testing.png`}></img>
            </div>

            <Footer />
        </>
    )
};
