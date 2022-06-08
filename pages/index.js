import Slider from '../views/home/Slider'
import Layout from '../views/Layout'
import OurServices from '../views/home/OurServices'
import OurProcess from '../views/home/OurProcess'
import Gallery from '../views/home/Gallery'

export default function Home() {
    return (
        <Layout>
            <Slider />
            <OurServices />
            <OurProcess />
            <Gallery />
        </Layout>
    )
}
