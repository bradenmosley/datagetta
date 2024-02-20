'use client'

import Lottie from "lottie-react";
import animation from '../public/LandingPage.json'

const style = {
  height: `100vh`,
  backgroundColor: `#000`,
}

export default function Home() {
  return <Lottie animationData={animation} style={style}/>;
}
