import { useState } from "react";
import { Button } from "../../components";

import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

const Index = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  const [value, setValue] = useState(0);

  const { Handle } = Slider;

  const clickHandler = () => {
    if (account) {
      mint(value);
    } else {
      loadWeb3();
    }
  };

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
      <div className="container  w-full flex justify-center">
        <div className="">
          <div className="text-center text-xs mb-5">
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
            <Button onClick={clickHandler} color="primary">
              {account
                ? "Mint Your Nebula Conqueror"
                : "Connect Wallet to Mint"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
