import "./_appLoading.scss"
import { ThreeCircles } from 'react-loader-spinner'

export default function AppLoading() {
  return (
    <div className="generalLoading">
         <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#d19f68"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
    </div>
  )
}
