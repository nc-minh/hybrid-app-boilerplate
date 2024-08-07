import { Outlet } from "react-router-dom";

import Column from "@core/components/Column";
import Row from "@core/components/Row";
import AppFooter from "@mobile/containers/AppFooter";
import AppHeader from "@mobile/containers/AppHeader";
import AppPaddingLeft from "@mobile/containers/AppPaddingLeft";
import AppPaddingRight from "@mobile/containers/AppPaddingRight";
import KeyboardPadding from "@mobile/containers/KeyboardPadding";
import useMobileConfigs from "@mobile/hooks/useMobileConfigs";

const MobileLayout = () => {
  useMobileConfigs();

  return (
    <Row fullHeight>
      <AppPaddingLeft />
      <Column fullWidth>
        <AppHeader />
        <Outlet />
        <KeyboardPadding />
        <AppFooter />
      </Column>
      <AppPaddingRight />
    </Row>
  );
};

export default MobileLayout;
