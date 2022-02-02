import { useState } from "react";
import { ChevronDown } from "@styled-icons/heroicons-outline";

import "./App.css";
import { Network, Token, Swap } from "./types";
import { networks, tokens } from "./data";
import ExampleImg from "./assets/img/example.png";
import Exchanger from "./components/Exchanger";

function App() {
  const [networkKey, setNetworkKey] = useState<Network["networkKey"]>(
    networks[0].networkKey
  );

  const [tokenInId, setTokenInId] = useState<Token["id"]>(tokens[0].id);
  const [tokenOutId, setTokenOutId] = useState<Token["id"]>(tokens[1].id);

  const [amountIn, setAmountIn] = useState("0");

  const handleTokenInIdChange = (newTokenInId: Token["id"]) => {
    setTokenInId(newTokenInId);

    // Update tokenOutId so it is different from tokenInId in case user
    // selected two similar tokens
    if (newTokenInId === tokenOutId) {
      setTokenOutId(tokenInId);
    }
  };

  const handleTokenOutIdChange = (newTokenOutId: Token["id"]) => {
    setTokenOutId(newTokenOutId);

    // Update tokenInId so it is different from tokenOutId in case user
    // selected two similar tokens
    if (newTokenOutId === tokenInId) {
      setTokenInId(tokenOutId);
    }
  };

  const handleSubmit = (swap: Swap) => {
    console.log("New transaction");
    console.log(swap);
    alert("Check the console!");
  };

  return (
    <div className="App">
      <div className="half-container">
        <h1>Welcome to the Ondefy onboarding process</h1>
        <h2>Your mission</h2>
        <ul>
          <li>
            <p>Create a react component from the following image</p>
          </li>
          <li>
            <p>Feel free to do it in the best way you think</p>
          </li>
          <li>
            <p>The component must be dynamic</p>
          </li>
          <li>
            <p>
              You will find tokens and networks data in the <span>data.js</span>{" "}
              file
            </p>
          </li>
          <li>
            <div className="flex-item">
              <p>
                You can use <span>heroicons</span> to display icons
              </p>
              <ChevronDown className="chevron" />
            </div>
          </li>
        </ul>

        <img src={ExampleImg} alt="example" />
      </div>
      <div className="half-container">
        <h2>Please display the result below</h2>

        <Exchanger
          networks={networks}
          tokens={tokens}
          amountIn={amountIn}
          onAmountInChange={setAmountIn}
          networkKey={networkKey}
          onNetworkKeyChange={setNetworkKey}
          tokenInId={tokenInId}
          onTokenInIdChange={handleTokenInIdChange}
          tokenOutId={tokenOutId}
          onTokenOutIdChange={handleTokenOutIdChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
