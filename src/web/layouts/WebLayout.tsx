import { Outlet } from "react-router-dom";

import Column from "@core/components/Column";
import Row from "@core/components/Row";

const WebLayout = () => {
  return (
    <Row fullHeight>
      <Column fullWidth>
        <Outlet />
      </Column>
    </Row>
  );
};

export default WebLayout;
