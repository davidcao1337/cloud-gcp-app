import cloudLogo from './assets/cloud-flat.png'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img className="mt-14 mb-10" src={cloudLogo} alt="" width="230" height="69" />
      <h2 className="mb-14 font-bold text-3xl text-white">Welcome to my Cloud App!</h2>
      <iframe width="500" height="700" src="https://console.dialogflow.com/api-client/demo/embedded/82c177ea-4b7f-4b0d-ad6e-f91988996f96"></iframe>
    </div>
  )
}

export default App
