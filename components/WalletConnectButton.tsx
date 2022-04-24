import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const style = {
    button: "bg-[#ffffff] hover:bg-[#cccccc] text-black font-bold py-2 px-8 rounded-full ml-8"
}

export const WalletConnectButton = () => {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    return (
        <div>
            {address ? (
            <button className={style.button} onClick={disconnectWallet}>{address.substring(0,6)}...</button>
        ) : (
            <button className={style.button} onClick={connectWithMetamask}>Connect</button>
        )}
        </div>
    );
};