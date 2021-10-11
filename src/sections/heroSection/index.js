import { useState } from "react";
import { Button } from "../../components";

import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

const Index = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  const [value, setValue] = useState(0);

  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, Index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={Index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="py-10">
      <div className="container ">
        <div className=" w-full">
          <div className="flex justify-center mb-20 items-center">
            <Button color="primary" onClick={() => loadWeb3()}>
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : "disconnected"}
            </Button>
          </div>
        </div>
        <div className=" w-full ">
          <p className="text-center sm:mx-auto  text-lg font-black mt-6  w-full  max-w-lg ">
            The Nebula Conqueror is a 10,000 NFT's series of space Avatar which
            will be usable as characters in our cosmos conquest browser P2E
            game.
          </p>

          <div className="mt-14 max-w-md w-full mx-auto">
            <div className="flex justify-center text-xs mb-5">
              <span>Total Nebula Conqueror Minted: {totalSupply} / 7777</span>
            </div>
            <Slider min={1} max={5} defaultValue={1} handle={handle} />
            <p className="text-center text-xs mt-2">
              {account
                ? `Mint ${value} Starfish(${(value * displayPrice).toFixed(
                    4
                  )} Ether)`
                : "Connect Account"}
            </p>
            <div className="mt-8 text-center">
              <Button
                onClick={() => mint(value)}
                disabled={!account ? true : false}
                color="primary"
              >
                Mint Your Nebula Conqueror
              </Button>
              <p className="mt-10 text-center">
                5 fully unique are hidden in the 10k NFTs.
              </p>
              <p className="mx-auto text-center">Good luck!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
