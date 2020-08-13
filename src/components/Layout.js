import Nav from '../components/organisms/Nav'
import Footer from '../components/organisms/Footer'

const Layout = props => (
    <div className="Layout">
        <Nav />
        {/* <div>Header</div> */}

        <main>
            {props.children}
        </main>

        <Footer />
    </div>
  )

  export default Layout