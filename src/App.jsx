import Cover from "./components/cover";
import InvitationDetail from "./components/invitation-detail";

import { useState } from "react";

function App() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  async function openInvitation() {
    setIsOpening(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsOpening(false);
    setOpened(true);
  }

  return (
    <div className="flex justify-center lg:justify-between">
      <Cover opened={opened} onOpen={openInvitation} isOpening={isOpening} />
      {opened && <InvitationDetail opened={opened} />}
    </div>
  );
}

export default App;
