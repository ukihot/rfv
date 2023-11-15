import { Card, Metric, Switch } from "@tremor/react";
import { useRecoilState } from "recoil";
import * as atoms from "./components/atoms";
export interface AppProps {
  members: MembersProps[];
}
interface MembersProps {
  id: number;
  name: string;
}

const App = ({ members }: AppProps) => {
  const [playerStatus, setPlayerStatus] = useRecoilState(
    atoms.playerStatusState
  );

  const handleToggle = (player: string) => {
    setPlayerStatus((prevPlayerStatus) => ({
      ...prevPlayerStatus,
      [player]: !prevPlayerStatus[player],
    }));
  };
  return (
    <>
      <h3>Dog</h3>
      {Array.from({ length: 7 }, (_, index) => index + 1).map((dogNumber) => (
        <Card className="max-w-xs mx-auto" key={`dog${dogNumber}`}>
          <Switch
            id="switch"
            name="switch"
            checked={playerStatus[`dog${dogNumber}`]}
            onChange={() => handleToggle(`dog${dogNumber}`)}
          />
          <Metric>{`dog${dogNumber}`}</Metric>
        </Card>
      ))}
    </>
  );
};

export default App;
