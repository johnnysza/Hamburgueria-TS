import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 80px;
  padding: 0 115px;
  z-index: 1;
  background-color: var(--gray-0);
  display: flex;
  justify-content: center;
  align-items: center;

  #noSearchDivMobile {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  #logo {
    width: 150px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }

    :focus {
      background-color: blue;
    }
  }

  #endBox {
    display: flex;
    align-items: center;
    gap: 25px;

    #searchBox {
      width: 365px;
      height: 60px;
      background-color: #ffffff;
      border: 2px solid var(--gray-100);
      border-radius: 8px;
      padding: 0 10px 0 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      input {
        width: 80%;
        height: 100%;
        border: none;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        color: var(--gray-0);
        font-size: 16px;

        :focus {
          color: var(--gray-300);
        }
      }

      #searchIconDiv {
        width: 53px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--color-primary);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 18px;
        }

        :hover {
          cursor: pointer;
          background-color: #93d7af;
        }
      }

      :focus-within {
        border: 2px solid var(--gray-300);
      }
    }

    #searchMobile {
      display: none;
    }

    #cartSVGDiv {
      display: flex;

      #cartSVG {
        font-size: 22px;
        color: var(--gray-300);
        transform: translateX(5px);
      }

      #cartCounter {
        width: 20px;
        height: 24px;
        background-color: var(--color-primary);
        border-radius: 7px;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 24px;
        transform: translateY(-15px);
      }

      :hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    }

    #logoutSVG,
    #searchMobile {
      font-size: 22px;
      color: var(--gray-300);

      :hover {
        cursor: pointer;
        filter: brightness(0.7);
      }
    }
  }

  #mobileSearchBox {
    width: 365px;
    height: 60px;
    background-color: #ffffff;
    border: 2px solid var(--gray-100);
    border-radius: 8px;
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input {
      width: 80%;
      height: 100%;
      border: none;
      border-radius: 8px;
      outline: none;
      font-size: 16px;
      color: var(--gray-0);
      font-size: 16px;

      :focus {
        color: var(--gray-300);
      }
    }

    #searchIconDiv {
      width: 53px;
      height: 40px;
      border-radius: 8px;
      background-color: var(--color-primary);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 18px;
      }

      :hover {
        cursor: pointer;
        background-color: #93d7af;
      }
    }

    :focus-within {
      border: 2px solid var(--gray-300);
    }

    #searchMobile {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0 20px;

    #endBox {
      gap: 10px;

      #searchBox {
        display: none;
      }

      #searchMobile {
        display: block;
      }
    }
  }
`;
