import Sidebar from "../../components/Sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-950 bg-clip-padding ">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
