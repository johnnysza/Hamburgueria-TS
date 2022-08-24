import { HeaderContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useProducts } from "../../Providers/Products";
import { useAuth } from "../../Providers/Auth";
import { toast } from "react-toastify";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const { cart, modalOpenClick, searchInput, writeSearchInput } = useProducts();

  const { Signout } = useAuth();

  const mobileSearchClickHandler = () => {
    toast.info(`Clique no botão de pesquisa novamente para voltar ao menu.`);
    setShowSearch(true);
  };

  return (
    <HeaderContainer>
      {!showSearch && (
        <div id="noSearchDivMobile">
          <div id="logo">
            <img
              src="https://i.ibb.co/ct7G91Q/burguer-logo.png"
              alt="Burguer Logo"
            />
          </div>
          <div id="endBox">
            <div id="searchBox">
              <input
                value={searchInput}
                onChange={(e) => writeSearchInput(e.target.value)}
                type="text"
                placeholder="Digitar Pesquisa"
              />
              <div id="searchIconDiv">
                <BiSearch />
              </div>
            </div>
            <BiSearch id="searchMobile" onClick={mobileSearchClickHandler} />
            <div id="cartSVGDiv" onClick={modalOpenClick}>
              <FaShoppingCart id="cartSVG" />
              <div id="cartCounter">{cart.length}</div>
            </div>
            <FiLogOut id="logoutSVG" onClick={Signout} />
          </div>
        </div>
      )}
      {showSearch && (
        <div id="mobileSearchBox">
          <input
            value={searchInput}
            onChange={(e) => writeSearchInput(e.target.value)}
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <div id="searchIconDiv" onClick={() => setShowSearch(false)}>
            <BiSearch />
          </div>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
