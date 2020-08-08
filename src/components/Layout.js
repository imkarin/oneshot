const Layout = props => (
    <div className="Layout">
        {/* <div>Nav</div> */}
        {/* <div>Header</div> */}

        <main>
            {props.children}
        </main>

        {/* <div>Footer</div> */}
    </div>
  )

  export default Layout