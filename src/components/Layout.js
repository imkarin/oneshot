import Nav from '../components/organisms/Nav'

const Layout = props => (
    <div className="Layout">
        <Nav />
        {/* <div>Header</div> */}

        <main>
            {props.children}
        </main>

        {/* <div>Footer</div> */}
    </div>
  )

  export default Layout