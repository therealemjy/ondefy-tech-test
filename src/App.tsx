import { useState } from "react";
import { ChevronDown } from "@styled-icons/heroicons-outline";

import "./App.css";
import { Network, Token } from "./types";
import { networks, tokens } from "./data";
import ExampleImg from "./assets/img/example.png";
import Exchanger from "./components/Exchanger";

function App() {
  const [networkKey, setNetworkKey] = useState<Network["networkKey"]>(
    networks[0].networkKey
  );

  const [fromTokenId, setFromTokenId] = useState<Token["id"]>(tokens[0].id);
  const [toTokenId, setToTokenId] = useState<Token["id"]>(tokens[1].id);

  const [amount, setAmount] = useState("1000");

  const handleFromTokenIdChange = (newFromTokenId: Token["id"]) => {
    setFromTokenId(newFromTokenId);

    // Update toTokenId so it is different from fromTokenId in case user
    // selected two similar tokens
    if (newFromTokenId === toTokenId) {
      setToTokenId(fromTokenId);
    }
  };

  const handleToTokenIdChange = (newToTokenId: Token["id"]) => {
    setToTokenId(newToTokenId);

    // Update fromTokenId so it is different from toTokenId in case user
    // selected two similar tokens
    if (newToTokenId === fromTokenId) {
      setFromTokenId(toTokenId);
    }
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
          amount={amount}
          onAmountChange={setAmount}
          networkKey={networkKey}
          onNetworkKeyChange={setNetworkKey}
          fromTokenId={fromTokenId}
          onFromTokenIdChange={handleFromTokenIdChange}
          toTokenId={toTokenId}
          onToTokenIdChange={handleToTokenIdChange}
          onSubmit={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
