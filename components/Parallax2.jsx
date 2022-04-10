import React from 'react'
import { Parallax } from 'react-parallax';

function Parallax2() {
    const [ offsetY, setOffsetY ] = useState(0); // to know scroll px
const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        // crear un componente para desmontar el listener cuando no esté el componente
        return () => window.removeEventListener('scroll', handleScroll)
    }, []); 

  return (
      <Parallax >

      </Parallax>
  )
}

export default Parallax2