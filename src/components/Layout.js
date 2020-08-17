import Nav from '../components/organisms/Nav'
import Footer from '../components/organisms/Footer'
import { motion } from 'framer-motion'

const Layout = props => (
    <div className='Layout' >

        <Nav />
        {/* <div>Header</div> */}

        <motion.main 
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 20 }} 
            transition={{ ease: 'easeInOut', duration: 1, delay: .3 }} >
            {props.children}
        </motion.main>

        <Footer />
    </div>
  )

  export default Layout