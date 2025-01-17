import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { WalletConnectButton } from "./WalletConnectButton";

const style = {
    wrapper: 'bg-[#04111d] w-full px-[1.2rem] py-[0.8rem] flex',
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl mr-20`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
}

const Header = () => {
    return <div className={style.wrapper}>
        <div className={style.logoText}>Show NFT Collection</div>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch />
            </div>
            <input className={style.searchInput} placeholder="Input Collection Address" onChange={(event) => setInputValue(event.target.value)} />
        </div>
        <WalletConnectButton />
    </div>
}

export default Header