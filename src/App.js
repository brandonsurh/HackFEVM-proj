import ConnectWallet from "./connect_wallet";

const MenuBar = () => {
    return (
        <>
            <button>home</button>
            <button>explore</button>
            <button>about</button>
            <button>connect wallet</button>
        </>
    )
}


const App  = () => {
    return (
        <div className="App">
            <h1>peerio</h1> 
            <MenuBar />
        </div>
    )
}


export default App;
