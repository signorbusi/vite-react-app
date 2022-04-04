import { toBech32 } from "@harmony-js/crypto";

export default function App(): JSX.Element {
  return (
    <div className="App">
      {toBech32("0xAD8a7BDc0d195619A72aD41cE55DAC93A5bc896c")}
    </div>
  );
}
